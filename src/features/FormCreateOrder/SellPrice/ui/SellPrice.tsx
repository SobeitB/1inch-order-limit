import {useForm} from "effector-forms";

import {Container, Input} from "shared/ui/SettingOrder";
import {Text} from "shared/ui/Text";
import {useInput} from "shared/lib/input";
import {$createOrderForm} from "entities/OrderLimit";


export const SellPrice = () => {
   const { fields } = useForm($createOrderForm)
   const input = useInput(fields.sellPrice.onChange);

   return(
      <Container widthCont="70">
         <Text>Sell token at rate:</Text>

         <Input
            minLength={0}
            type='number'
            {...input}
         />
      </Container>
   )
}