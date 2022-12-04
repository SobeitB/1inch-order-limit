import {WrapperInside} from "./styled";
import { TokensSort } from "shared/config";
import {Wrapper} from "shared/ui/Wrapper";

import {ChekedTokens} from "widgets/ChekedTokens";
import {IsConnected} from "widgets/IsConnected";
import {SellPrice} from "features/FormCreateOrder";
import {DateExperires} from "features/FormCreateOrder";

const CreateLimitOrder = () => {
   return(
      <Wrapper>
         <WrapperInside>

            <ChekedTokens
               methodChange={TokensSort.SELL}
            />

            <ChekedTokens
               methodChange={TokensSort.BUY}
            />

         </WrapperInside>

         <WrapperInside isSetting>
            <SellPrice />

            <DateExperires />
         </WrapperInside>

         <IsConnected />
      </Wrapper>
   )
}

export default CreateLimitOrder;