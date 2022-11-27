import {
   LimitOrderProtocolFacade,
   LimitOrder,
   Web3ProviderConnector
} from '@1inch/limit-order-protocol';
import {useStore} from "effector-react";
import Web3 from "web3";

import {ADDRESS_LIMIT_ORDER} from "shared/config";
import {$user} from "entities/Viewer";


export const useCancelOrder = () => {
   const {signer} = useStore($user);

   const cancelorder = (order?: LimitOrder, isAll?:boolean) => async () => {

      const [walletAddress] = window.ethereum.request({method:"eth_accounts"})
      const connector = new Web3ProviderConnector(new Web3(Web3.givenProvider));

      const limitOrderProtocolFacade = new LimitOrderProtocolFacade(ADDRESS_LIMIT_ORDER, connector);

      let callData;
      if(isAll) {
         callData = limitOrderProtocolFacade.increaseNonce();
      } else {
         callData = limitOrderProtocolFacade.cancelLimitOrder(order);
      }

      await signer.sendTransaction({
         from: walletAddress,
         to: ADDRESS_LIMIT_ORDER,
         data: callData,
      });
   }

   return cancelorder
}