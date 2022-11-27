import {useStore} from "effector-react";
import {BigNumber, utils} from "ethers";
import Web3 from "web3";
import {LimitOrderBuilder, Web3ProviderConnector} from "@1inch/limit-order-protocol";

import {ADDRESS_LIMIT_ORDER, CHAIN_ID} from "shared/config";
import {$erc20, $input_sell, $input_sellPrice, $select_erc20} from "entities/OrderLimit";
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

      const configLimitOrder = {
         makerAssetAddress: selectToken.sell.address,
         takerAssetAddress: selectToken.buy.address,
         makerAddress: wallet,
         makerAmount,
         takerAmount,
         predicate: '0x',
         permit: '0x',
         interaction: '0x',
      };

      const web3 = new Web3(Web3.givenProvider);
      const connector = new Web3ProviderConnector(web3);

      const limitOrderBuilder = new LimitOrderBuilder(
         ADDRESS_LIMIT_ORDER,
         +CHAIN_ID,
         connector
      );

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