import {Button} from "shared/ui/Button";
import {useApproveToken} from "features/ApproveTokens";

export const ApproveTokens = () => {
   const ApproveToken = useApproveToken();

   return(
      <Button onClick={ApproveToken} >Approve token</Button>
   )
}