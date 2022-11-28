
import styled from 'styled-components';

export const Container = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media(max-width: 450px) {
    width: 95%;
  }
`

export const Input = styled.input`
  min-width: 55%;
  height: 50px;
  background: #324054;
  border: none;
  color: aqua;
  border-radius: 15px;
  padding: 0 20px;
  margin-top: 15px;
  &::placeholder {
    color:white;
  }
  &::placeholder {
    color:white;
  }
  
  @media(max-width: 350px) {
    width: 80%;
  }
`