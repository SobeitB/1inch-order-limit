import styled from 'styled-components';

import {Button} from "shared/ui/Button";

export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const CancelAll = styled(Button)`
  background: rgba(193, 61, 84, .4);
  color:#FF8078;
  border-radius: 12px;
  padding: 11px 58px;
  margin-bottom: 20px;
`