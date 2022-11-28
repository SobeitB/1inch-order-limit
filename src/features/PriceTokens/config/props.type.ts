import {selectsTokens, TokensProps} from "shared/config";

export interface PriceTokensProps extends TokensProps {
   select_token:selectsTokens;
   count:string;
}