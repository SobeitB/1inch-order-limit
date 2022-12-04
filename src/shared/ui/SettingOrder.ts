
import styled from 'styled-components';

interface ContainerProps {
   widthCont:string;
}

export const Container = styled.div
   .attrs((props:ContainerProps) => props)
   `
  width: ${props => props.widthCont}%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 7px;

  @media(max-width: 450px) {
    width: 95%;
  }
`

export {Input} from './Input'