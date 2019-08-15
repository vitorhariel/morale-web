import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Nunito:400,800&display=swap');

  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    *:focus {
      outline: 0;
    }

    html, body, #root {
      height: 100%;
      background: #1F1D25;
      color: #7259c0;
    }

    body {
      -webkit-font-smoothing: antialiased;
    }

    body, input, button {
      font: 14px 'Nunito', sans-serif;
    }

    a {
      text-decoration: none;
    }

    ul {
      list-style: none;
    }

    button {
      cursor: pointer;
      border: 0;
    }
`;
