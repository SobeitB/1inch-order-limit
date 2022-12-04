import {useStore} from "effector-react";

import {Container, Item, ItemLogo, ItemTitle, TextCenter} from "./styled";
import {ActiveOrderUiType} from "shared/config";
import {Image} from "shared/ui/Image";
import {Text} from 'shared/ui/Text'
import {CancelOrder, CancelOrderType} from "features/CancelOrders";
import {$erc20} from "entities/OrderLimit";

interface OrderProps {
   order:ActiveOrderUiType,
}

export const Order = ({order}:OrderProps) => {
   const erc20 = useStore($erc20);

   return(
      <Container>
         <Item>
            <ItemTitle>You sell</ItemTitle>
            <ItemLogo>
               <Image
                  src={erc20[order.addressMaker].logoURI}
               />
            </ItemLogo>
         </Item>

         <Item>
            <ItemTitle>You buy</ItemTitle>
            <ItemLogo>
              <Image
                  src={erc20[order.addressTaker].logoURI}
               />
            </ItemLogo>
         </Item>

         <Item>
            <ItemTitle>Created</ItemTitle>

            <TextCenter>{order.createDateTime}</TextCenter>
         </Item>

         <Item>
            <CancelOrder
               type={CancelOrderType.SINGLE}
               data={{
                  data:order.data,
                  hash:order.hash
               }}
            />
         </Item>
      </Container>
   )
}