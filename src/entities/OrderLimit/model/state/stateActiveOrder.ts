import {createEvent, createStore} from 'effector';

import {ActiveOrderType} from "shared/config";
import {getActiveOrdersFx} from "shared/api/orders";
import {ActiveOrderUiType} from "shared/config";

const arrMonthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export const conversionOrderData = (payload:ActiveOrderType[]):ActiveOrderUiType[] => {
   const ordersUi = payload.map((order:ActiveOrderType) => {
      const {data} = order;
      const date = new Date(order.createDateTime);

      return {
         createDateTime:`${date.getDate()} ${arrMonthName[date.getMonth()]} ${date.getFullYear()}`,
         addressMaker:data.makerAsset,
         addressTaker:data.takerAsset,
         takerRate:Number(order.takerRate).toFixed(5),
         makerRate:Number(order.makerRate).toFixed(5),
         hash:order.orderHash,
         data,
      }
   })

   return ordersUi
}

interface activeOrders {
   orders:ActiveOrderUiType[];
   isLoading:boolean;
}
const activeOrders_init:activeOrders = {
   orders:[],
   isLoading:true,
}

type hashOrder = string;

export const addActiveOrder = createEvent<ActiveOrderUiType>();
export const removeSingleOrder = createEvent<hashOrder>();
export const removeAllOrders = createEvent();

export const $getActiveOrders = createStore<activeOrders>(activeOrders_init)
   .on(getActiveOrdersFx.doneData, (state, payload:ActiveOrderType[]) => ({
      orders: conversionOrderData(payload),
      isLoading: false,
   }))
   .on(addActiveOrder, (state, payload:ActiveOrderUiType) => ({
      orders: [payload,...state.orders],
      isLoading: state.isLoading,
   }))
   .on(removeSingleOrder, (state, hashOrder) => ({
      orders: state.orders.filter((order) => order.hash !== String(hashOrder)),
      isLoading: state.isLoading,
   }))
   .on(removeAllOrders, (state, hashOrder) => ({
      orders: [],
      isLoading: state.isLoading,
   }))

