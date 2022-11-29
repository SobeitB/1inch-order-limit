import {Container, Delete, Item, ItemLogo, ItemTitle, TextCenter} from "./styled";
// @ts-ignore
import delete_icon from "./images/delete.png";
import {ActiveOrderUiType} from "shared/config";
import {Image} from "shared/ui/Image";
import {Text} from 'shared/ui/Text'
import {useCancelOrder} from "entities/ActiveOrder";

interface OrderProps {
   order:ActiveOrderUiType
}

export const Order = ({order}:OrderProps) => {
   const cancelOrder = useCancelOrder();

   return(
      <Container>
         <Item>
            <ItemTitle>You sell</ItemTitle>
            <ItemLogo>
               <Image
                  src={order.logoMaker}
               />
            </ItemLogo>
         </Item>

         <Item>
            <ItemTitle>You buy</ItemTitle>
            <ItemLogo>
              <Image
                  src={order.logoMaker}
               />
            </ItemLogo>
         </Item>

         <Item>
            <ItemTitle>Order rates</ItemTitle>

            <div>
               <Text>maker: {order.makerRate}</Text>
               <Text>taker: {order.takerRate}</Text>
            </div>
         </Item>

         <Item>
            <ItemTitle>Created</ItemTitle>

            <TextCenter>{order.createDateTime}</TextCenter>
         </Item>

         <Item>
            <Delete onClick={cancelOrder(order.data)}>
               <Image
                  src={delete_icon}
               />
            </Delete>
         </Item>
      </Container>
   )
}