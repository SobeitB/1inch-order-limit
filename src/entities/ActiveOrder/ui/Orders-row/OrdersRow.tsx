import {useStore} from "effector-react";

import {Error} from "shared/ui/Text";
import {Button} from "shared/ui/Button";
import {$getActiveOrders, Order, useCancelOrder} from "entities/ActiveOrder";

export const OrdersRow = () => {
   const orders = useStore($getActiveOrders);
   const cancelOrder = useCancelOrder();

   return(
      <div>
         <Button onClick={cancelOrder(undefined, true)}>delete all</Button>

         {orders.length > 0 ? orders.map((order) => (
            <Order key={order.createDateTime} orderData={{orderHash:order.orderHash,date:order.data}} />
         ))
         :
         <Error>There are no active orders</Error>
         }
      </div>
   );
}

