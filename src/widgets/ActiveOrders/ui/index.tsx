import {Body} from "./styled";
import {OrdersRow} from "entities/OrderLimit";
import {CancelOrder, CancelOrderType} from "features/CancelOrders";

export const ActiveOrders = () => {
   return(
      <Body>
         <CancelOrder type={CancelOrderType.ALL} />
         <OrdersRow />
      </Body>
   )
}