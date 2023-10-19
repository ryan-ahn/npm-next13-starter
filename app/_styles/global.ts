import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

// NOTE style reset & global style
export const GlobalStyle = createGlobalStyle`
  ${reset}
  @keyframes clickableOnboard{
    0%{
      transform: scale(0.99);
      box-shadow: 0 0 0 0 rgba(255, 221, 0, 0.9);
    }
    70%{
      transform: scale(1);
      box-shadow: 0px 0px 0 25px rgba(255, 221, 0, 0);
    }
    100%{
      transform: scale(0.99);
      box-shadow: 0 0 0 0 rgba(255, 221, 0, 0);
    }
  }
  @keyframes buttonOnboard{
    0%{
      transform: scale(0.99);
      box-shadow: 0 0 0 0 rgba(120, 120, 120, 0.9);
    }
    70%{
      transform: scale(1);
      box-shadow: 0px 0px 10px 18px rgba(120, 120, 120, 0);
    }
    100%{
      transform: scale(0.99);
      box-shadow: 0 0 0 0 rgba(120, 120, 120, 0);
    }
  }

  #sleek-button{
    left: 104px;
    bottom: 130px;
    z-index: 10;
  }
  * {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
  }
  body{
    color: #343434;
    font-family: 'Noto', sans-serif;
    scrollbar-track-color: rgba(0, 0, 0, 0.03);
    scrollbar-face-color: rgba(0, 0, 0, 0.2);
    //webkit
    ::-webkit-scrollbar {
      width: 6px;
    }
    ::-webkit-scrollbar-track {
      background: none;
    }
    ::-webkit-scrollbar-thumb {
      background: rgba(0, 0, 0, 0.2);
      border-radius: 5px;
    }
    ::-webkit-scrollbar-corner {
      background: rgba(0, 0, 0, 0.5);
    }
    ::-webkit-scrollbar-thumb:hover {
      background: rgba(0, 0, 0, 0.4);
    }
    //ms
    ::-ms-scrollbar {
      width: 6px;
    }
    ::-ms-scrollbar-track-color {
      background: rgba(0, 0, 0, 0.03);
    }
    ::-ms-scrollbar-base-color {
      background: rgba(0, 0, 0, 0.2);
    }
    //FireFox
    scrollbar-width: thin;
    scrollbar-color: rgba(0, 0, 0, 0.2) rgba(0, 0, 0, 0);
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  input, button {
    background-color: transparent;
    border: none;
    outline: none;
    font-family: 'Noto', sans-serif;
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
