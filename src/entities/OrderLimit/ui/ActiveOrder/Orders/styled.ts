
import styled from 'styled-components';
import {TextInfo} from 'shared/ui/Text'

export const Container = styled.div`
  width: 100%;
  height: 85px;
  border-radius: 15px;
  background:rgb(8 15 31 / 50%);
  color:#ffff;
  
  display: flex;
  align-items: center;
  justify-content:space-between;
  padding: 0 15px;
  margin: 10px 0;
  
  &:hover{
    background: rgb(16 29 56 / 50%);
  }
`

export const Item = styled.div`
  height:100%;
  padding: 7px 0;
  margin:0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const ItemTitle = styled(TextInfo)`
  margin: 0;

  @media(max-width:1100px) {
    font-size: 12px;
  }
`

export const TextCenter = styled.div`
  margin: auto 0;
  @media(max-width:1100px) {
    font-size: 14px;
  }
`

export const ItemLogo = styled.div`
  width: 40px;
  height: 40px;
`