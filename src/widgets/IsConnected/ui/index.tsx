import {useStore} from "effector-react";

import {$user, ConnectWallet} from "entities/Viewer";
import {OrderLimit} from "entities/OrderLimit";

export const IsConnected = () => {
   const {address} = useStore($user);

   if(address.length > 0) {
      return <OrderLimit />
   }

   return <ConnectWallet />
}