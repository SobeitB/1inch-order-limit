import styled from "styled-components";
import {Text} from "shared/ui/Text";

export const TokensCurrentBody = styled.div
   .attrs((props:{isOpen:boolean}) => props)`

  position: absolute;
  top:0;
  left:0;
  z-index: 20;
  width: 100%;
  height: 100%;
  padding: 20px;
  overflow: auto;
  background: #0f3551;
  border-radius: 20px;

  display: ${props => props.isOpen ? 'block' : 'none'};
`

export const BodyBack = styled.div`
  position: relative;
  top:5px;
  left: 15px;
`

export const Back = styled.button`
  border: 1px solid #ffff;
  color:#fff;
  font-size: 18px;
  background: black;
  border-radius: 5px;
  padding: 13px;
  cursor:pointer;
`

export const TokensCurrent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
  background: #212121;
  padding: 2px;
  border-radius: 7px;
  cursor:pointer;
`;

export const Info = styled(TokensCurrent)`
  flex-direction: column;
  align-items: start;
  margin:0;
`

export const BodyTokenIcon = styled.div`
  width: 50px;
  height: 50px;
  margin-right: 14px;
`

export const InfoAddress = styled(Text)`
  margin-bottom: 4px;
`

export const InfoPrice = styled(Text)`
  font-size: 14px;
  color: #cccccc;
`