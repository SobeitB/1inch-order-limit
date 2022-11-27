
import {createEffect, createStore} from 'effector';
import {ACTIVE_LIMIT_ORDERS} from "shared/config";
import {ActiveOrderType} from "shared/config";

import {request} from "shared/lib/request";

export const getActiveOrdersFx = createEffect(async () => {
   return await request(await ACTIVE_LIMIT_ORDERS())
})

export const $getActiveOrders = createStore<ActiveOrderType[]>([])
   .on(getActiveOrdersFx.doneData, (state, payload:ActiveOrderType[]) => ([
      ...state,
      ...payload,
   ]))



getActiveOrdersFx();