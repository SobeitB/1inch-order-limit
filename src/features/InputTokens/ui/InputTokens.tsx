import {InputTag} from "./styled";

import {setInput} from "entities/OrderLimit";
import {useInput} from "shared/lib/input";

interface InputTokensProps {
   isVisible:boolean;
}

export const InputTokens = ({isVisible}:InputTokensProps) => {
   const input = useInput(setInput);

   if(isVisible) {
      return <InputTag
         placeholder="count"
         type="number"
         {...input}
      />
   }

   return null;
}

