import {useConnect} from "entities/Viewer";
import {ButtonConnect} from "./styled";

export const Connecting = () => {
   const onConnectWallet = useConnect();

   return(
      <ButtonConnect onClick={onConnectWallet(false)}>Connect crypto wallet</ButtonConnect>
   )
}

