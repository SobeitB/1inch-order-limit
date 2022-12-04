import {useForm} from "effector-forms";

import {InputTag} from "./styled";
import {useInput} from "shared/lib/input";
import {$createOrderForm} from "entities/OrderLimit";

interface InputTokensProps {
   isVisible:boolean;
}

export const InputTokens = ({isVisible}:InputTokensProps) => {
   const { fields } = useForm($createOrderForm)
   const input = useInput(fields.countSell.onChange);

   if(isVisible) {
      return <InputTag
         placeholder="count"
         type="number"
         {...input}
      />
   }

   return null;
}

