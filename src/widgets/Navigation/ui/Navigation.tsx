import {Links, WrapperNavigation} from "./styled";
import {routesNavigation} from "shared/config/routing";

export const Navigation = () => {
   return(
      <WrapperNavigation>
         {Object.entries(routesNavigation).map(([_, {path, route, text}]) => (
            <Links key={path} to={route}>{text}</Links>
         ))}
      </WrapperNavigation>
   )
}