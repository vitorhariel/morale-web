import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1108px;
  margin: 25px auto;
  padding: 0 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  div.header-left {
    display: flex;
    align-items: center;

    a {
      display: flex;
      align-items: center;

      h1 {
        margin-left: 10px;
        color: #f8e587;
      }
    }
  }

  div.header-right {
    display: flex;
    align-items: center;

    a {
      font-weight: 800;
      color: #f8e587;
    }

    button {
      margin-left: 25px;
      height: 45px;
      width: 184px;
      background: #f8e587;
      border-radius: 50px;
      font-weight: 800;
      color: #666a86;
    }
  }

  @media all and (max-width: 481px) {
    div.header-right {
      button {
        height: 36px;
        width: 132px;
      }

      span {
        display: none;
      }
    }
  }
`;
