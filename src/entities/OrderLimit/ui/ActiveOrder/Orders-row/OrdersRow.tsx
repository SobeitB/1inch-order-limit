import {useStore} from "effector-react";

import {Error} from "shared/ui/Text";
import {$getActiveOrders, Order} from "entities/OrderLimit";

export const OrdersRow = () => {
   const {orders} = useStore($getActiveOrders);

   return(
      <>
      {
         orders.length > 0 ? orders.map((order) => (
               <Order key={order.hash} order={order} />
            ))
            :
            <Error>There are no active orders</Error>
      }
      </>
   )
}

