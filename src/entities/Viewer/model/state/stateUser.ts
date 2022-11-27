import {createEvent, createStore } from 'effector'
import {UserType} from "shared/config";

export const connectWallet = createEvent<UserType>();
export const changeBalance = createEvent<number>();
export const changeAddress = createEvent<string>();

const initUserState:UserType = {
   address:'',
   balance:0,
   provider:null,
   signer:null,
}

export const $user = createStore<UserType>(initUserState)
   .on(connectWallet, (_, newState) => ({
      ...newState
   }))
   .on(changeBalance, (state, balance) => ({
      ...state,
      balance:state.balance - balance,
   }))
   .on(changeAddress, (state, address) => ({
      ...state,
      address:address,
   }))