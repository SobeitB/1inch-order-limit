import {useStore} from "effector-react";

import {OrderLimit} from "./OrderLimit";
import {$user, ConnectWallet} from "entities/Viewer";

export const IsConnected = () => {
   const {address} = useStore($user);

   if(address.length > 0) {
      return <OrderLimit />
   }

   return <ConnectWallet />
}