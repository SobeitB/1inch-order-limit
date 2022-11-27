import {useStore} from "effector-react";

import {Wrapper} from "shared/ui/Wrapper";
import {OrdersRow} from "entities/ActiveOrder";
import {$user, ConnectWallet} from "entities/Viewer";

const ActiveLimitOrders = () => {
   const {signer} = useStore($user);

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

export default ActiveLimitOrders