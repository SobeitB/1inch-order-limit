
import {Button} from 'shared/ui/Button'
import {useCreateOrder} from "features/CreateOrder";

export const CreateOrder = () => {
   const createOrder = useCreateOrder();

   return(
      <Button onClick={createOrder}>Create Order</Button>
   )
}