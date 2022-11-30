import {useStore} from "effector-react";
import {useForm} from "effector-forms";
import {utils} from "ethers";
import Web3 from "web3";
import {
   LimitOrder,
   LimitOrderBuilder,
   LimitOrderPredicateBuilder,
   LimitOrderProtocolFacade,
   Web3ProviderConnector
} from "@1inch/limit-order-protocol";

import {ActiveOrderType, ADDRESS_LIMIT_ORDER, CHAIN_ID, GET_NEW_ORDER} from "shared/config";
import {$createOrderForm, $select_erc20, addActiveOrder, conversionOrderData} from "entities/OrderLimit";
import {AddOrderLimit} from "entities/OrderLimit";
import {request} from "shared/lib/request";

export const useCreateOrder = () => {
   const selectToken = useStore($select_erc20);
   const { fields } = useForm($createOrderForm);

   const createOrder = async () => {
      const countSell = fields.countSell.value;
      const sellWhatPrice = fields.sellPrice.value;
      const dateExpires = +fields.dateExpires.value * 60;

      const price_in_native = selectToken.sell.price_in_native
      const sellDecimals = selectToken.sell.decimals;

      const makerAmountNumb = +price_in_native * +countSell;
      const takerAmountNumb = +sellWhatPrice * +countSell;

      const makerAmount = utils.parseUnits(makerAmountNumb.toFixed(sellDecimals), sellDecimals).toString();
      const takerAmount = utils.parseUnits(takerAmountNumb.toFixed(sellDecimals), sellDecimals).toString();


      const {ethereum} = window;
      const [wallet] = await ethereum.request({method:"eth_accounts"})
      const web3 = new Web3(Web3.givenProvider);
      const connector = new Web3ProviderConnector(web3);

      const limitOrderProtocolFacade = new LimitOrderProtocolFacade(ADDRESS_LIMIT_ORDER, connector);
      const limitOrderPredicateBuilder = new LimitOrderPredicateBuilder(
         limitOrderProtocolFacade
      );
      const limitOrderBuilder = new LimitOrderBuilder(
         ADDRESS_LIMIT_ORDER,
         +CHAIN_ID,
         connector
      );
      const {
         timestampBelow,
         nonceEquals,
         and
      } = limitOrderPredicateBuilder;

      const nonceOrder = await limitOrderProtocolFacade.nonce(wallet);

      const timeStamp = timestampBelow(Math.round(Date.now() / 1000) + dateExpires);
      const nonce = nonceEquals(wallet, nonceOrder);
      const predicate = and(timeStamp, nonce);

      // const predicate = limitOrderPredicateBuilder.nonceEquals(wallet, nonce);

      const configLimitOrder = {
         makerAssetAddress: selectToken.sell.address,
         takerAssetAddress: selectToken.buy.address,
         makerAddress: wallet,
         makerAmount,
         takerAmount,
         predicate,
         permit: '0x',
         interaction: '0x',
      };

      const limitOrder = limitOrderBuilder.buildLimitOrder(configLimitOrder);

      const limitOrderTypedData = limitOrderBuilder.buildLimitOrderTypedData(
         limitOrder
      );

      const signature = await limitOrderBuilder.buildOrderSignature(
         wallet,
         limitOrderTypedData
      );

      const limitOrderHash = await limitOrderBuilder.buildLimitOrderHash(
         limitOrderTypedData
      );

      try {
         const data:any = limitOrderTypedData.message
         await AddOrderLimit({
            data,
            orderHash:limitOrderHash,
            signature,
            chainId:+CHAIN_ID,
         });

         const orderData:ActiveOrderType = {
            createDateTime:new Date(Date.now() + dateExpires).toISOString(),
            data,
            isMakerContract:false,
            makerAllowance:'',
            makerBalance:'',
            makerRate:makerAmountNumb.toString(),
            orderHash:limitOrderHash,
            orderInvalidReason:null,
            remainingMakerAmount:'',
            signature,
            takerRate:'',
         }

         const [convOrderData] = conversionOrderData([orderData])
         addActiveOrder(convOrderData)
      } catch (e) {
         console.log(e)
      }
   }

   return createOrder
}