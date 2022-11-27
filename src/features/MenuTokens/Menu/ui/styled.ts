import styled from "styled-components";
import {Text} from "shared/ui/Text";

export const TokensCurrentBody = styled.div
   .attrs((props:{isOpen:boolean}) => props)`

  position: absolute;
  top:65px;
  z-index: 20;
  width: 500px;
  height: 290px;
  padding: 20px;
  overflow: auto;
  background: #0f3551;
  border-radius: 20px;

  display: ${props => props.isOpen ? 'block' : 'none'};
`

export const TokensCurrent = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   margin: 5px;
`;

export const TokensCurrentIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 20px;
`

export const TokensCurrentAddress = styled(Text)`
  margin-top: 10px;
`