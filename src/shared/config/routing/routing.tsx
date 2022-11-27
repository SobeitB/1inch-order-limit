import {createHistoryRouter, createRoute} from "atomic-router";
import {createBrowserHistory} from "history";

import {RoutesPath, RoutesType, RoutesTypeNavigation} from "./routing.type";

export const createOrderLimit = createRoute();
export const OrderLimits = createRoute();

export const routesNavigation:Record<RoutesPath, RoutesTypeNavigation> = {
   [RoutesPath.CREATE_ORDER]: {
      path: RoutesPath.CREATE_ORDER,
      route: createOrderLimit,
      text:'Create order limit'
   },

   [RoutesPath.HISTORY_ORDER_LIMIT]: {
      path: RoutesPath.HISTORY_ORDER_LIMIT,
      route: OrderLimits,
      text:'View orders limit'
   },
}

export const routes:RoutesType[] = Object.entries(routesNavigation).map((route) => ({
   path:route[1].path,
   route:route[1].route,
}))

export const router = createHistoryRouter({
   routes,
});

const history = createBrowserHistory();
router.setHistory(history);