import {useStore} from "effector-react";

import {BodyTokens, Info, TokensWrapper} from "./styled";
import {$input_sell, $select_erc20} from "entities/OrderLimit";
import {TokensProps, TokensSort} from "shared/config";
import {TextInfo} from "shared/ui/Text";
import {WrappedMenu} from "features/MenuTokens";
import {PriceTokens} from "features/PriceTokens";
import {InputTokens} from "features/InputTokens";
import {useMemo} from "react";

export const ChekedTokens = ({methodChange}:TokensProps) => {
   const select_tokens = useStore($select_erc20);
   const current_token = useMemo(() => select_tokens[methodChange], [select_tokens, methodChange])
   const count = useStore($input_sell);

   return(
      <TokensWrapper>

         <Info>
            <TextInfo>You{methodChange === TokensSort.SELL ? ' sell' : ' buy'}</TextInfo>
            <TextInfo>Balance: {current_token.balance ?? '0'}</TextInfo>
         </Info>
         <BodyTokens>
            <WrappedMenu methodChange={methodChange} token={current_token} />
            <InputTokens isVisible={methodChange === TokensSort.SELL}/>
         </BodyTokens>

         <Info>
            <TextInfo>{current_token.name}</TextInfo>
            <PriceTokens
               methodChange={methodChange}
               select_token={select_tokens}
               count={count}
            />
         </Info>
      </TokensWrapper>
   )
}