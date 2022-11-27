import {createRoutesView} from "atomic-router-react";

import {CreateLimitOrder} from "pages/CreateLimitOrder";
import {ActiveLimitOrders} from "pages/ActiveLimitOrders";

import {createOrderLimit, OrderLimits} from "shared/config/routing";
import {WrapperLoading} from "shared/ui/Loading";


export const RoutesView = createRoutesView({
   routes: [
      { route: createOrderLimit, view: CreateLimitOrder, layout:WrapperLoading},
      { route: OrderLimits, view: ActiveLimitOrders, layout:WrapperLoading },
   ],
});

