import {Signer} from "ethers";

export interface UserType {
   address:string,
   balance:number,
   provider:null | any,
   signer:null | Signer,
}