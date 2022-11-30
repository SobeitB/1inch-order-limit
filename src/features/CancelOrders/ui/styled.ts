import styled from "styled-components";

import {Button} from "shared/ui/Button";

export const CancelAll = styled(Button)`
  background: rgba(193, 61, 84, .4);
  color:#FF8078;
  border-radius: 12px;
  padding: 11px 58px;
  margin-bottom: 20px;
`

export const Delete = styled.button`
  width: 40px;
  height: 40px;
  padding: 5px;
  cursor: pointer;
  border: 0;
  background: transparent;
  margin: auto;
  border-radius: 9px;
  
  &:hover{
    background: rgba(193, 61, 84, .4);
    color:#FF8078;
  }
`