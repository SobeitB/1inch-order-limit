import {useState} from "react";

type returnUseOpen = [boolean, () => void];

export const useOpen = ():returnUseOpen => {
   const [isSelect, setSelect] = useState(false);

   const changeSelect = () => {
      setSelect(!isSelect);
   }

   return [
      isSelect,
      changeSelect
   ]
}