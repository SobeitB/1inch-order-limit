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
}

export type TokensType = Record<string, TokensInfo>;

export interface selectsTokens {
   sell:TokensInfo,
   buy:TokensInfo
}