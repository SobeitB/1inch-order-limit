import {TextInfo} from "shared/ui/Text";
import {GetPrice, PriceTokensProps} from "../";


export const PriceTokens = (props:PriceTokensProps) => (
   <TextInfo>
      {GetPrice(props)}
   </TextInfo>
)