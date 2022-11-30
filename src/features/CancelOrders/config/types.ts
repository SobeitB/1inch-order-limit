import {LimitOrder} from "@1inch/limit-order-protocol";

export enum CancelOrderType {
   ALL='all',
   SINGLE='single',
}

export interface CancelOrderProps {
   type:CancelOrderType;
   data?:{
      data:LimitOrder;
      hash:string;
   };
}