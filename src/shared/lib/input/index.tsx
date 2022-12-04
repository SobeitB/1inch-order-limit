import {useCallback, useEffect, useState} from "react";

import {useDebounce} from "./debounce";

export type eventTargetInput = React.ChangeEvent<HTMLInputElement>
export type returnInputSell = {
   value:string;
   onChange:(value: eventTargetInput) => void
}

export const useInput = (onChangeState:(payalod:string) => string):returnInputSell => {
   const [value, setValueInput] = useState<string>('0');
   const valueDebounce = useDebounce<string>(value);

   useEffect(() => {
      onChangeState(valueDebounce)
   }, [valueDebounce])

   const onChange = useCallback((event: eventTargetInput) => {
      const value = event.target.value;
      setValueInput(value)
   }, [])

   return {value, onChange}
}