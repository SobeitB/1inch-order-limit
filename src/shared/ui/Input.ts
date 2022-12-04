import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
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