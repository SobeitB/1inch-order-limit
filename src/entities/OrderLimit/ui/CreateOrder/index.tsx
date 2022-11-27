
import {Button} from 'shared/ui/Button'
import {useCreateOrder} from "entities/OrderLimit";

export const CreateOrder = () => {
   const createOrder = useCreateOrder();

   return(
      <Button onClick={createOrder}>Create Order</Button>
   )
}