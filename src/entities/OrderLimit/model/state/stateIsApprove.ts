import {createEvent, createStore} from "effector";

export const setApprove = createEvent();
export const setChangeToken = createEvent();

export const $isApproveToken = createStore<boolean>(false)
   .on(setApprove, (prevState, _) => !prevState)
   .on(setChangeToken, (prevState, _) => false)
