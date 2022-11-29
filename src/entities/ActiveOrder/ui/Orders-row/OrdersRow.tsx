import {useStore} from "effector-react";

import {Body, CancelAll} from "./styled";
import {Error} from "shared/ui/Text";
import {$getActiveOrders, Order, useCancelOrder} from "entities/ActiveOrder";

export const OrdersRow = () => {
   const orders = useStore($getActiveOrders);
   const cancelOrder = useCancelOrder();

   return(
      <Body>
         <CancelAll onClick={cancelOrder(undefined, true)}>delete all</CancelAll>

         {orders.length > 0 ? orders.map((order) => (
            <Order key={order.hash} order={order} />
         ))
         :
         <Error>There are no active orders</Error>
         }
      </Body>
   );
}

