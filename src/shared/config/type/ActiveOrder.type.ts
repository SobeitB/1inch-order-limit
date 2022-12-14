import {LimitOrder} from "@1inch/limit-order-protocol";

export interface ActiveOrderType {
   createDateTime:string;
   data:LimitOrder;
   isMakerContract:boolean;
   makerAllowance:string;
   makerBalance:string;
   makerRate:string;
   orderHash:string;
   orderInvalidReason:null | any;
   remainingMakerAmount:string;
   signature:string;
   takerRate:string;
}

