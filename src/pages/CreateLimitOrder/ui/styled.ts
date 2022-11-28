import styled from 'styled-components';

interface WrapperInsideProps {
   isCenter:boolean;
}

export const WrapperInside = styled.div
   .attrs((props:WrapperInsideProps) => props)
   `
  width:100%;
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.isCenter ? 'center' : 'space-between'};
  align-items: center;

  margin-bottom:10px;
  ${props => props.isCenter && `
      margin-bottom:15px;
      background: #06070A;
      width:90%;
      padding: 15px;
      border-radius: 15px;
  `}
`