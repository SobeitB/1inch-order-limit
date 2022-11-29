import {createEffect, createEvent, createStore, forward} from 'effector';
import { createForm } from 'effector-forms';

export const $createOrderForm = createForm({
   fields: {
      countSell: {
         init: "",
         rules: [
            {
               name: "required",
               validator: (value: string) => true,
            }
         ],
      },
      sellPrice: {
         init: "",
         rules: [
            {
               name: "required",
               validator: (value: string) => true,
            }
         ],
      },
      dateExpires: {
         init: "",
         rules: [
            {
               name: "required",
               validator: (value: string) => true,
            }
         ],
      },
   },
   validateOn: ["submit"],
})

export const createOrderFx = createEffect()

forward({
   from: $createOrderForm.formValidated,
   to: createOrderFx,
})