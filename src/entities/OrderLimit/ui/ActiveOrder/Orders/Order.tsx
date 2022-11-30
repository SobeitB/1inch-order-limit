import {Container, Item, ItemLogo, ItemTitle, TextCenter} from "./styled";
import {ActiveOrderUiType} from "shared/config";
import {Image} from "shared/ui/Image";
import {Text} from 'shared/ui/Text'
import {CancelOrder, CancelOrderType} from "features/CancelOrders";

interface OrderProps {
   order:ActiveOrderUiType,
}

export const Order = ({order}:OrderProps) => {

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
            <CancelOrder
               type={CancelOrderType.SINGLE}
               data={order.data}
            />
         </Item>
      </Container>
   )
}