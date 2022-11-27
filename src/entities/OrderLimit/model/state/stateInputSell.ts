import {createEvent, createStore} from 'effector'

export const setInput = createEvent<string>()

export const $input_sell = createStore<string>('0')
   .on(setInput, (_, newCount) => newCount)