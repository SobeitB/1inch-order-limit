import {useStore} from "effector-react";
import {ethers} from "ethers";
import {useEffect, useMemo} from "react";

import {ADDRESS_LIMIT_ORDER, TokensSort} from 'shared/config';
import {ContractErc20} from 'shared/lib/ContractErc20'
import {$user} from "entities/Viewer";
import {$isApproveToken, $select_erc20, setApprove} from "entities/OrderLimit";

export const useApproveToken = () => {
   const isApprove = useStore($isApproveToken);
   const selectToken = useStore($select_erc20);
   const {signer} = useStore($user);

   const [contract] = useMemo(() => (
      ContractErc20([selectToken[TokensSort.SELL].address], signer)
   ), [selectToken])

   const ApproveToken = async () => {
      try{
         await contract.approve(ADDRESS_LIMIT_ORDER, ethers.constants.MaxUint256)

         setApprove()
      } catch (e) {
         console.log(e)
      }
   }

   useEffect(() => {
      const isApproved = async () => {
         const {ethereum} = window;
         const [curentAddress] = await ethereum.request({method: 'eth_accounts' })
         const allowance = await contract.allowance(curentAddress,ADDRESS_LIMIT_ORDER);

         const allowanceFormat = +ethers.utils.formatUnits(allowance, selectToken[TokensSort.SELL].decimals);

         if(allowanceFormat > 0 && !isApprove) {
            setApprove();
         }
      }

      isApproved()
   }, [contract, isApprove])

   return ApproveToken;
}