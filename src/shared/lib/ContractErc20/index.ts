import {Contract, Signer} from "ethers";

// @ts-ignore
import abi_erc20 from 'shared/config/abi/erc20.json'


export const ContractErc20 = (addresses:string[],signer:Signer) => {
   const contracts = [];
   for(let key in addresses) {
      contracts.push(new Contract(addresses[key], abi_erc20, signer))
   }


   return contracts;
}