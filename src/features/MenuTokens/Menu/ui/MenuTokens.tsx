import {useCallback} from "react";
import {useStore} from "effector-react";

import {
   TokensCurrent,
   TokensCurrentAddress,
   TokensCurrentBody,
   TokensCurrentIcon
} from "./styled";
import {TokensInfo} from "shared/config/type/Tokens.type";
import {TokensSort} from "shared/config";
import {useNavigationTokens} from "../";
import {$erc20, $price_eth, changeErc20, setChangeToken} from "entities/OrderLimit";

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
         {Object.entries(tokens).slice(page, page*10).map(([address, token], index) => (

            <TokensCurrent key={address} onClick={selectToken(address, token)} >
               <TokensCurrentIcon
                  src={token.logoURI}
                  alt=""
               />

               <TokensCurrentAddress>{token.name}</TokensCurrentAddress>
            </TokensCurrent>

         ))}

         <div ref={responseNext} />
      </TokensCurrentBody>
   )

}