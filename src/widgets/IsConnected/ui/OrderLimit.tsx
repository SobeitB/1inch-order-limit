import {useStore} from 'effector-react'

import {$isApproveToken} from 'entities/OrderLimit';
import {ApproveTokens} from 'features/ApproveTokens';
import {CreateOrder} from 'features/CreateOrder';

export const OrderLimit = () => {
   const isApprove = useStore($isApproveToken)

   if(isApprove) {
      return(
         <CreateOrder />
      )
   }

   return(
      <ApproveTokens />
   )
}