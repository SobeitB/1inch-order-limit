import {useStore} from "effector-react";

import {
   TextTokens,
   TokensWrapper
} from "./styled";
import { $input_sell, $select_erc20} from "entities/OrderLimit";
import {TokensProps, TokensSort} from "shared/config/type";
import {WrappedMenu} from "features/MenuTokens";
import {PriceTokens} from "features/PriceTokens";
import {InputTokens} from "features/InputTokens";

export const ChekedTokens = ({methodChange}:TokensProps) => {
   const select_token = useStore($select_erc20);
   const count = useStore($input_sell);

   return(
      <TokensWrapper>
         <WrappedMenu methodChange={methodChange} />

         <TextTokens>{select_token[methodChange].name}</TextTokens>

         <InputTokens isVisible={methodChange === TokensSort.SELL}/>

         <PriceTokens
            methodChange={methodChange}
            select_token={select_token}
            count={count}
         />
      </TokensWrapper>
   )
}