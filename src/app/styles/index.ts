import styled, {createGlobalStyle} from 'styled-components';

export const Globals = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
  }

  a{
    text-decoration: none;
  }

  li{
    list-style-type:none;
  }

  html, body {
    height: 100%;
    background: #06070A;
  }
  
  #root{
    height: 100%;
    width: 100%;
  }

  main{
    flex: 1 1 auto;
  }
`

export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media(max-width: 770px) {
    flex-direction: column;
  }
`