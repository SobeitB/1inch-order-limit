import {useCallback} from "react";
import {useStore} from "effector-react";

import {
   Back,
   BodyBack,
   BodyTokenIcon,
   Info, InfoAddress, InfoPrice,
   TokensCurrent,
   TokensCurrentBody
} from "./styled";
import {TokensInfo} from "shared/config/type/Tokens.type";
import {TokensSort} from "shared/config";
import {useNavigationTokens} from "../";
import {$erc20, $price_eth, changeErc20, setChangeToken} from "entities/OrderLimit";
import {Image} from "shared/ui/Image";

interface MenuTokensProps {
   isOpen:boolean;
   setOpen:() => void;
   methodChange:TokensSort;
}

export const MenuTokens = ({isOpen, setOpen, methodChange}:MenuTokensProps) => {
   const tokens = useStore($erc20);
   const price_native = useStore($price_eth);
   const {responseNext, page} = useNavigationTokens();

   const selectToken = useCallback((address:string, token:TokensInfo) => () => {
      changeErc20[methodChange]({token, price_native,});
      setChangeToken()
      setOpen();
   }, [changeErc20, tokens, setOpen, price_native])

   return(
      <TokensCurrentBody isOpen={isOpen}>
         <BodyBack>
            <Back onClick={setOpen}>back</Back>
         </BodyBack>

         {Object.entries(tokens).slice(page, page*10).map(([address, token]) => (

            <TokensCurrent key={address} onClick={selectToken(address, token)} >
               <TokensCurrent>
                  <BodyTokenIcon>
                     <Image
                        src={token.logoURI}
                        alt=""
                     />
                  </BodyTokenIcon>

                  <Info>
                     <InfoAddress>{token.name}</InfoAddress>
                     <InfoPrice>{token.price} {token.symbol}</InfoPrice>
                  </Info>
               </TokensCurrent>

            </TokensCurrent>

         ))}

         <div ref={responseNext} />
      </TokensCurrentBody>
   )

}