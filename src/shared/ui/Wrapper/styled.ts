import styled from 'styled-components';

export const Body = styled.main`
  width: 100%;
  height: 100%;

  padding: 40px;

  @media(max-width: 900px) {
    padding: 25px;
  }

  @media(max-width: 770px) {
    &:nth-child(1) {
      order: 2;
    }
    
    &:nth-child(2) {
      order: 1;
    }
  }
`

export const Container = styled.main`
  position: relative;
  max-height: 600px;
  max-width:600px;
  border-radius: 24px;
  background:#131823;

  padding: 20px;
  margin: auto;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  
  @media(max-width: 1100px) {
    max-width:400px;
  }

  @media(max-width: 900px) {
    padding: 20px 5px;
    max-width:340px;
  }

  @media(max-width: 770px) {
    max-width:700px;
  }
`