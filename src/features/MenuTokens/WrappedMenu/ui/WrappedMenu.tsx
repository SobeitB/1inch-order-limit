import {OpenMenu} from "./styled";
import {MenuTokens} from "../../";
import {useOpen} from "../../";

import {TokensProps} from "shared/config/type";

export const WrappedMenu = ({methodChange}:TokensProps) => {
   const [isOpen, setOpen] = useOpen();

   return(
      <>
         <OpenMenu onClick={setOpen}>open/close</OpenMenu>
         <MenuTokens isOpen={isOpen} setOpen={setOpen} methodChange={methodChange} />
      </>
   )
}