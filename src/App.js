import Lists from './Lists';
import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  ${reset}
  *{
    box-sizing: border-box;
  }
  body{
    width: 100vw;
    height: 100vh;
  }
  input{
    border: none;
    background: rgba(255,255,255,1);
    padding: 0;
    outline: none;
  }
  button {
    border: none;
    background: transparent;
  }
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Lists />
    </>
  );
}

export default App;