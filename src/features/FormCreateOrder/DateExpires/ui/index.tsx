import {useForm} from "effector-forms";

import {Container, Input} from "shared/ui/SettingOrder";
import {useInput} from "shared/lib/input";
import {$createOrderForm} from "entities/OrderLimit";
import {Text} from "shared/ui/Text";

export const DateExperires = () => {
   const { fields } = useForm($createOrderForm)
   const input = useInput(fields.dateExpires.onChange);

   return(
      <Container widthCont="25">
         <Text>Expires in:</Text>

         <Input
            minLength={0}
            type='number'
            {...input}
         />
      </Container>
   )
}