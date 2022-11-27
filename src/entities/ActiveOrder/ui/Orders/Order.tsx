import {LimitOrder} from "@1inch/limit-order-protocol";

import {Container} from "./styled";
import {Text} from 'shared/ui/Text'
import { Button } from "shared/ui/Button";
import {useCancelOrder} from "entities/ActiveOrder";

interface OrderProps{
   orderData:{
      orderHash:string;
      date:LimitOrder;
   };
}

export const Order = ({orderData}:OrderProps) => {
   const cancelOrder = useCancelOrder();

   return(
      <Container>
         <Text>Hash order: {orderData.orderHash}</Text>
         <Button onClick={cancelOrder(orderData.date)}>Delete order</Button>
      </Container>
   )
}