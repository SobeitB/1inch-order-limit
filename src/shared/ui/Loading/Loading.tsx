import { Icon } from '@iconify/react';

import {LoadingContainerTwister} from "./styled";

export const Loading = () => (
   <LoadingContainerTwister>
      <Icon
         width="200px"
         height="200px"
         color="white"
         icon="eos-icons:three-dots-loading"
      />
   </LoadingContainerTwister>
)