import {BodyContent, BodyIcon, OpenMenu} from "./styled";
import {MenuTokens} from "../../";
import {useOpen} from "../../";
import {TokensInfo, TokensProps} from "shared/config";
import {Image} from "shared/ui/Image";

interface WrappedMenuProps extends TokensProps{
   token:TokensInfo;
}

export const WrappedMenu = ({methodChange, token}:WrappedMenuProps) => {
   const [isOpen, setOpen] = useOpen();

   return(
      <>
         <OpenMenu onClick={setOpen}>
            {token.name === '' ?
               'open'
               :
               <BodyContent>
                  <BodyIcon>
                     <Image
                        src={token.logoURI}
                     />
                  </BodyIcon>
                  {token.symbol}
               </BodyContent>
            }
         </OpenMenu>
         <MenuTokens isOpen={isOpen} setOpen={setOpen} methodChange={methodChange} />
      </>
   )
}