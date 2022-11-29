import {createEffect} from "effector";
import {request} from "shared/lib/request";
import {ACTIVE_LIMIT_ORDERS} from "shared/config";

export const getActiveOrdersFx = createEffect(async () => {
   return await request(await ACTIVE_LIMIT_ORDERS());
})

export const callAllFuncOrders = async () => {
   getActiveOrdersFx()
}