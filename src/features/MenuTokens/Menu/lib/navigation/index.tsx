import {useEffect, useRef, useState} from "react";

export const useNavigationTokens = () => {
   const responseNext = useRef<HTMLDivElement>(null);
   const [page, setPage] = useState(1);

   useEffect(() => {
      if(responseNext.current !== null) {

         let observer = new IntersectionObserver((entries, observer) => {
            if(entries[0].isIntersecting) {
               setPage((page) => page+1)
            }
         })

         observer.observe(responseNext.current);
      }
   }, [responseNext])

   return {
      responseNext,
      page
   }
}