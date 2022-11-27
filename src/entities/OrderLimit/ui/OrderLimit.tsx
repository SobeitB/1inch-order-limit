import {useStore} from 'effector-react'

import {$isApproveToken, ApproveTokens, CreateOrder} from 'entities/OrderLimit'

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