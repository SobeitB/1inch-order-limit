import {ReactNode, Suspense} from "react";
import { Icon } from '@iconify/react';

import {LoadingContainerTwister} from "./styled";

export const Loading = () => (
   <LoadingContainerTwister>
      <Icon
         width="200px"
         height="200px"
         icon="eos-icons:three-dots-loading"
      />
   </LoadingContainerTwister>
)

export const WrapperLoading = ({children}:{children:ReactNode}) => (
   <Suspense fallback={<Loading />}>
      {children}
   </Suspense>
)