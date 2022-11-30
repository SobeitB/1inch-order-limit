import {CancelAll, Delete} from "./styled";
import {Image} from "shared/ui/Image";
// @ts-ignore
import delete_icon from "./images/delete.png";
import {CancelOrderProps, CancelOrderType, useCancelOrder} from "features/CancelOrders";

export const CancelOrder = ({type, data}:CancelOrderProps) => {
   const cancelOrder = useCancelOrder();

   return(
      <div>
         {type === CancelOrderType.ALL ?
            <CancelAll >
               Cancel all orders
            </CancelAll>
            :
            <Delete onClick={cancelOrder(data)}>
               <Image
                  src={delete_icon}
               />
            </Delete>
         }
      </div>
   )
}