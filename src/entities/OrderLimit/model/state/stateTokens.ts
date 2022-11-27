import {createApi, createEffect, createStore} from 'effector'
import {utils} from "ethers";

import {CHAIN_NAME, GET_PRICE_ETH, GET_TOKENS, TokensType, selectsTokens, TokensInfo} from "shared/config";
import {GET_TOKENS_PRICE} from "shared/config";
import {request} from "shared/lib/request";

export const getTokensFx = createEffect(async () => {
   return await request(GET_TOKENS);
})
export const $erc20 = createStore<TokensType>({})
  .on(getTokensFx.doneData, (_, tokens) => tokens)

const select_erc_init:TokensInfo = {
   address: "",
   decimals: 0,
   logoURI: "",
   name: "",
   symbol: "",
   tags: [""],
   price:0
}
export const $select_erc20 = createStore<selectsTokens>({
   sell:select_erc_init,
   buy:select_erc_init,
})


export const getPriceEtherFx = createEffect(async () => {
   const req = await request(GET_PRICE_ETH);

   return req[`${CHAIN_NAME}-network`].usd
})
export const $price_eth = createStore<number>(0)
   .on(getPriceEtherFx.doneData, (_, price) => price)

let priceToken:TokensType = {};
const getPriceToken = async () => {
   priceToken = await request(GET_TOKENS_PRICE);
}

export const changeErc20 = createApi($select_erc20, {
   buy: (state, erc20) => {
      const {token, price_native} = erc20;

      const price:any = priceToken[token.address];
      return {
         ...state,
         buy:{...token, price:+utils.formatUnits(price) * price_native}
      }
   },
   sell: (state, erc20) => {
      const {token, price_native} = erc20;

      const price:any = priceToken[token.address];
      return {
         ...state,
         sell:{...token, price:+utils.formatUnits(price) * price_native}
      }
   },
});

getPriceToken();
getTokensFx();
getPriceEtherFx();