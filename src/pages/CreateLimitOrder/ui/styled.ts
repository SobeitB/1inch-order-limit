import styled from 'styled-components';

interface WrapperInsideProps {
   isSetting:boolean;
}

export const WrapperInside = styled.div
   .attrs((props:WrapperInsideProps) => props)
   `
  width:100%;
  display: flex;
  flex-direction: ${props => props.isSetting ? 'row' : 'column'};
  justify-content: space-between;
  align-items: center;

  margin-bottom:10px;
  // ${props => props.isSetting && `
  //     margin-bottom:15px;
  //     background: #06070A;
  //     width:90%;
  //     padding: 15px;
  //     border-radius: 15px;
  // `}
`