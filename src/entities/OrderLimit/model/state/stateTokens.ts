import {createApi, createStore} from 'effector'
import {BigNumber, utils} from "ethers";

import {
   TokensType,
   selectsTokens,
   TokensInfo,
   TokensSort
} from "shared/config";
import {
   getPriceEtherFx,
   getTokensFx,
   priceToken,
   balanceToken,
} from "shared/api/tokens";


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


export const $price_eth = createStore<number>(0)
   .on(getPriceEtherFx.doneData, (_, price) => price)


export const $select_erc20 = createStore<selectsTokens>({
   sell:select_erc_init,
   buy:select_erc_init,
})

const changeErc20Utils = (state:selectsTokens, erc20: { token: TokensInfo, price_native:number }, tokenType:TokensSort) => {
   const {token, price_native} = erc20;

   const price:string = priceToken[token.address];
   const balance:string = balanceToken[token.address].balance;

   const price_in_native:number = +utils.formatUnits(price);
   const balanceFormat:string = utils.formatUnits(balance);
   console.log(price_in_native)

   return {
      ...state,
      [tokenType]:{
         ...token,
         price:price_in_native * price_native,
         price_in_native,
         balance:balanceFormat
      }
   }
}

export const changeErc20 = createApi($select_erc20, {
   buy: (state, erc20) => changeErc20Utils(state,erc20,TokensSort.BUY),
   sell: (state, erc20) => changeErc20Utils(state,erc20,TokensSort.SELL),
});
