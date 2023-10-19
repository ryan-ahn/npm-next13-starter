import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  input, button {
    background-color: transparent;
    border: none;
    outline: none;
  }
  button {
    &:active{
      transform: scale(0.98);
    }
  }
  textarea {
    border: none;
    outline: none;
    font-family: 'Noto', sans-serif;
    overflow: auto;
    resize: none;
  }
  :focus{
    outline: none;
  }

  @keyframes skeleton-ui{
    0%{
      background-color: rgba(185, 185, 185, 0.1);
    }
    50%{
      background-color: rgba(185, 185, 185, 0.3);
    }
    100%{
      background-color: rgba(185, 185, 185, 0.1);
    }
  }
  @-webkit-keyframes skeleton-ui{
    0%{
      background-color: rgba(185, 185, 185, 0.1);
    }
    50%{
      background-color: rgba(185, 185, 185, 0.3);
    }
    100%{
      background-color: rgba(185, 185, 185, 0.1);
    }
  }
`;
