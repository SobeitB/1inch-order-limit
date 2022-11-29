import {useStore} from "effector-react";
import {utils} from "ethers";
import Web3 from "web3";
import {
   LimitOrderBuilder,
   LimitOrderPredicateBuilder,
   LimitOrderProtocolFacade,
   Web3ProviderConnector
} from "@1inch/limit-order-protocol";

import {ADDRESS_LIMIT_ORDER, CHAIN_ID} from "shared/config";
import { $input_sell, $input_sellPrice, $select_erc20} from "entities/OrderLimit";
import {AddOrderLimit} from "entities/OrderLimit";

export const useCreateOrder = () => {
   const selectToken = useStore($select_erc20);
   const sellWhatPrice = useStore($input_sellPrice);
   const countSell = useStore($input_sell);

   const createOrder = async () => {

      const price_in_native = selectToken.sell.price_in_native
      const sellDecimals = selectToken.sell.decimals;

      const makerAmount = utils.parseUnits((+price_in_native * +countSell).toFixed(sellDecimals), sellDecimals).toString();
      const takerAmount = utils.parseUnits((+sellWhatPrice * +countSell).toFixed(sellDecimals), sellDecimals).toString();


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

      const timeStamp = timestampBelow(Math.round(Date.now() / 1000) + 60);
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

      await AddOrderLimit({
         data:limitOrderTypedData.message,
         orderHash:limitOrderHash,
         signature,
      });

   }

   return createOrder
}