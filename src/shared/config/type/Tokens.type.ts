export interface TokensProps {
   methodChange:TokensSort;
}

export enum TokensSort {
   BUY='buy',
   SELL='sell',
}

export interface TokensInfo {
   address:string;
   decimals:number;
   logoURI:string;
   name:string;
   symbol:string;
   tags:string[];

   price?:number;
   price_in_native?:number;
   balance?:string;
}

export interface BalanceInfo {
   balance:string;
   allowance:string;
}

export type TokensType = Record<string, TokensInfo>;
export type Prices = Record<string, string>;
export type Balances = Record<string, BalanceInfo>;

export interface selectsTokens {
   sell:TokensInfo,
   buy:TokensInfo
}