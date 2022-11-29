import {createStore} from 'effector';

import {ActiveOrderType} from "shared/config";
import {getActiveOrdersFx} from "shared/api/orders";
import {GET_LOGO} from "shared/config/variables/api";
import {ActiveOrderUiType} from "shared/config";

const arrMonthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export const conversionOrderData = (payload:ActiveOrderType[]):ActiveOrderUiType[] => {
   const ordersUi = payload.map((order:ActiveOrderType) => {
      const {data} = order;
      const date = new Date(order.createDateTime);

      return {
         createDateTime:`${date.getDate()} ${arrMonthName[date.getMonth()]} ${date.getFullYear()}`,
         logoMaker:GET_LOGO(data.makerAsset),
         logoTaker:GET_LOGO(data.takerAsset),
         takerRate:Number(order.takerRate).toFixed(5),
         makerRate:Number(order.makerRate).toFixed(5),
         hash:order.orderHash,
         data,
      }
   })

   return ordersUi
}

export const $getActiveOrders = createStore<ActiveOrderUiType[]>([])
   .on(getActiveOrdersFx.doneData, (state, payload:ActiveOrderType[]) => conversionOrderData(payload))

