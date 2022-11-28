import {Globals, Main} from "app/styles";
import {useConnect} from "entities/Viewer";
import {ActiveLimitOrders} from "pages/ActiveLimitOrders";
import {CreateLimitOrder} from "pages/CreateLimitOrder";

declare global {
   interface Window {
      ethereum:any;
   }
}

const App = () => {
   useConnect();

   return(
      <Main>
         <Globals />

         <ActiveLimitOrders />
         <CreateLimitOrder />
      </Main>
   )
}

export default App;