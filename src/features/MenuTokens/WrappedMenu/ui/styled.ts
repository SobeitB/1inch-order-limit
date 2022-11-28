
import styled from 'styled-components'
import {Button} from "shared/ui/Button";

export const OpenMenu = styled(Button)`
  position: relative;
  z-index: 1;
  height: auto;
  padding: 10px;
  margin: auto 5px;
  font-size: 20px;
  
  cursor:pointer;
`;

export const BodyContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const BodyIcon = styled.div`
  width: 25px;
  height: 25px;
  margin-right: 5px;
`