import {Globals} from "app/styles";
import {withProviders} from "app/providers";
import {Navigation} from "widgets/Navigation";
import {useConnect} from "entities/Viewer";

declare global {
   interface Window {
      ethereum:any;
   }
}

const App = () => {
   useConnect()
   return(
      <>
         <Navigation />
         <Globals />
      </>
   )
}

export default withProviders(App);