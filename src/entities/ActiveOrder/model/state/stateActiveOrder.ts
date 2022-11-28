import {createStore} from 'effector';

import {ActiveOrderType} from "shared/config";
import {getActiveOrdersFx} from "shared/api/orders";

export const $getActiveOrders = createStore<ActiveOrderType[]>([])
   .on(getActiveOrdersFx.doneData, (state, payload:ActiveOrderType[]) => ([
      ...state,
      ...payload,
   ]))


getActiveOrdersFx();