import {TextTokens} from "./styled";
import {selectsTokens, TokensProps, TokensSort} from "shared/config/type";
import {priceBuy, priceSell} from "shared/lib/price";

interface PriceTokensProps extends TokensProps {
   select_token:selectsTokens;
   count:string;
}

export const PriceTokens = ({methodChange, select_token, count}:PriceTokensProps) => {

   if(methodChange === TokensSort.SELL) {
      return(
         <TextTokens>
            {`Price: $${
               priceSell(select_token[methodChange].price, count)
            }`}
         </TextTokens>
      )
   }

   return (
      <TextTokens>
         {`Price: $${
            priceBuy(
               select_token[TokensSort.SELL].price,
               select_token[TokensSort.BUY].price,
               count
            )
         }`}
      </TextTokens>
   )
}