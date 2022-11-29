import {useEffect} from "react";
import {ethers} from "ethers";

import {CHAIN_ID} from "shared/config";
import {UserType} from "shared/config";
import {connectWallet} from './state/stateUser'
import {callAllFuncTokens,} from "shared/api/tokens";
import {callAllFuncOrders} from "shared/api/orders";

export const useConnect = () => {
   const onConnectWallet = (isMouting:boolean) => async () => {
      const {ethereum} = window;

      const chainId = await ethereum.networkVersion;

      if(chainId !== CHAIN_ID) {
         await ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: ethers.utils.hexlify(+CHAIN_ID) }]
         });
      }

      const methodAccounts = isMouting ? 'eth_accounts' : 'eth_requestAccounts'
      const [account] = await ethereum.request({method: methodAccounts })

      if(account && chainId === CHAIN_ID) {
         const provider = new ethers.providers.Web3Provider(ethereum);
         const signer = provider.getSigner();
         const balance = +(ethers.utils.formatEther(await provider.getBalance(account)));

         const info:UserType = {
            address:account,
            balance,
            provider,
            signer
         }

         connectWallet(info);

         callAllFuncTokens()
         callAllFuncOrders()
      }
   }

   return onConnectWallet
}