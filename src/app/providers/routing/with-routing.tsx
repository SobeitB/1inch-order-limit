import { RouterProvider } from 'atomic-router-react';

import {RoutesView} from "./config/routing";
import {router} from "shared/config/routing";

export const withRouting = (component: () => React.ReactNode) => () => (
   <RouterProvider router={router}>
      {component()}
      <RoutesView />
   </RouterProvider>
)