import {createEvent, createStore} from 'effector'

export const setInputSellPrice = createEvent<string>()

export const $input_sellPrice = createStore<string>('0')
   .on(setInputSellPrice, (_, newPrice) => newPrice)