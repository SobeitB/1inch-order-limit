import { Body, Container} from "./styled";
import {ReactNode} from "react";

export const Wrapper = ({children}:{children:ReactNode}) => (
   <Body>
      <Container>
         {children}
      </Container>
   </Body>
)