import {TokensSort} from "shared/config";
import {priceBuy, priceSell} from "shared/lib/price";
import {PriceTokensProps} from "../";

export const GetPrice = ({methodChange, select_token, count}:PriceTokensProps) => {
   let price;
   if(methodChange === TokensSort.SELL) {
      price = `Price: $${priceSell(select_token[methodChange].price, count)}`
   } else {
      price = `Price: $${
         priceBuy(
            select_token[TokensSort.SELL].price,
            select_token[TokensSort.BUY].price,
            count
         )
      }`
   }

   return price;
}