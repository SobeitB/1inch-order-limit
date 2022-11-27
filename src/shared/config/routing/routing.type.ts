import {RouteInstance} from "atomic-router";

export enum RoutesPath {
   CREATE_ORDER = '/',
   HISTORY_ORDER_LIMIT = '/history-orderLimit',
}

export interface RoutesType {
   path:RoutesPath;
   route: RouteInstance<any>;
}

export interface RoutesTypeNavigation extends RoutesType {
   text:string;
}