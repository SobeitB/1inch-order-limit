import {Container, Input} from "shared/ui/SettingOrder";
import {Text} from "shared/ui/Text";
import {useInput} from "shared/lib/input";

import {setInputSellPrice} from "entities/OrderLimit";

export const SellPrice = () => {
   const input = useInput(setInputSellPrice);

   return(
      <Container>
         <Text>Sell token at rate:</Text>

         <Input
            minLength={0}
            type='number'
            {...input}
         />
      </Container>
   )
}