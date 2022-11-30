import {createEffect} from "effector";

import {request} from "shared/lib/request";
import {
   Balances,
   CHAIN_NAME,
   GET_PRICE_ETH,
   GET_TOKENS,
   GET_TOKENS_BALANCE,
   GET_TOKENS_PRICE,
   Prices
} from "shared/config";

export let balanceToken:Balances = {};
export const getBalanceToken = async () => {
   balanceToken = await request(await GET_TOKENS_BALANCE());
};

export let priceToken:Prices = {};
export const getPriceToken = async () => {
   priceToken = await request(GET_TOKENS_PRICE);
};

export const getTokensFx = createEffect(async () => {
   const {tokens} = await request(GET_TOKENS);
   return tokens;
})

export const getPriceEtherFx = createEffect(async () => {
   const req = await request(GET_PRICE_ETH);

   return req[`${CHAIN_NAME}-network`].usd
})

export const callAllFuncTokens = async () => {
   getBalanceToken();
   getPriceEtherFx();
   getPriceToken();
   getTokensFx();
}