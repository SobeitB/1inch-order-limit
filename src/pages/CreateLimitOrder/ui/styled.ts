import styled from 'styled-components';

interface WrapperInsideProps {
   isCenter:boolean;
}

export const WrapperInside = styled.div
   .attrs((props:WrapperInsideProps) => props)
   `
  width:100%;
  display: flex;
  justify-content: ${props => props.isCenter ? 'center' : 'space-between'};
  align-items: center;

  margin-bottom:30px;
`