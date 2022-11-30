import {useStore} from "effector-react";

import {Wrapper} from "shared/ui/Wrapper";
import {Loading} from "shared/ui/Loading";
import {$getActiveOrders} from "entities/OrderLimit";
import {ActiveOrders} from "widgets/ActiveOrders/ui";
import {$user, ConnectWallet} from "entities/Viewer";

const ActiveLimitOrders = () => {
   const {signer} = useStore($user);
   const {orders, isLoading} = useStore($getActiveOrders);

   if(orders.length > 0 && !isLoading) {
      return(
         <Wrapper>
            {signer ?
               <ActiveOrders />
               :
               <ConnectWallet />
            }
         </Wrapper>
      )
   }

   if(isLoading) {
      return <Loading />
   }

   return null;
}

export default ActiveLimitOrders