import {ADD_LIMIT_ORDER} from "shared/config";
import {EIP712Object} from "@1inch/limit-order-protocol/model/eip712.model";

interface AddOrderLimitProps {
   data:EIP712Object;
   orderHash:string;
   signature:string;
}

export const AddOrderLimit = async (settings:AddOrderLimitProps) => {
   const addOrder = await fetch(ADD_LIMIT_ORDER, {
      method:"POST",
      "headers": {
         "content-type": "application/json",
      },
      body:JSON.stringify(settings)
   })
   const addOrderJson = await addOrder.json()

   return addOrderJson;
}