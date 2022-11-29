import {useStore} from "effector-react";

import {Wrapper} from "shared/ui/Wrapper";
import {$getActiveOrders, OrdersRow} from "entities/ActiveOrder";
import {$user, ConnectWallet} from "entities/Viewer";

const ActiveLimitOrders = () => {
   const {signer} = useStore($user);
   const {orders, isLoading} = useStore($getActiveOrders);

   if(orders.length > 0 && !isLoading) {
      return(
         <Wrapper>
            {signer ?
               <OrdersRow />
               :
               <ConnectWallet />
            }
         </Wrapper>
      )
   }

   return null;
}

export default ActiveLimitOrders