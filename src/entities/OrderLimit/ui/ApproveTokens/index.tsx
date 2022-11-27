import {Button} from "shared/ui/Button";
import {useApproveToken} from "entities/OrderLimit/model/approveToken";

export const ApproveTokens = () => {
   const ApproveToken = useApproveToken();

   return(
      <Button onClick={ApproveToken} >Approve token</Button>
   )
}