import {createEvent, createStore} from "effector";

export const setApprove = createEvent();
export const $isApproveToken = createStore<boolean>(false)
   .on(setApprove, (prevState, _) => !prevState)
