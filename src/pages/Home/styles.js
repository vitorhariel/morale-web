import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
`;

export const Content = styled.div`
  div.main {
    max-width: 1108px;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 90px 20px;

    div {
      max-width: 450px;

      h2 {
        font-size: 42px;
        margin-bottom: 40px;
        color: #f8e587;
      }

      p {
        font-size: 24px;
        color: #666a86;
      }

      button {
        margin-top: 25px;
        height: 45px;
        width: 184px;
        background: #f8e587;
        border-radius: 50px;
        font-weight: 800;
        color: #666a86;
      }
    }

    img {
      width: 500px;
    }
  }

  div.main-bottom {
    max-width: 1108px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 10px 120px 10px;

    div.main-bottom-left {
      display: flex;
      align-items: center;

      img {
        margin-right: 20px;
      }

      p {
        font-size: 21px;
        max-width: 450px;
        color: #666a86;
      }
    }

    button {
      margin-top: 25px;
      height: 45px;
      width: 240px;
      background: #fff;
      border-radius: 50px;
      font-weight: 800;
      color: #666a86;
    }

    button.main {
      width: 280px;
    }
  }

  div.middle {
    position: relative;
    background: #0d0b10;
    color: #f8e587;
    padding: 40px 0;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      padding: 25px 10px;
      font-size: 42px;
      max-width: 545px;
      text-align: center;
    }

    p {
      font-size: 24px;
      max-width: 590px;
      text-align: justify;
      padding: 10px;
    }

    div.icons {
      width: 300px;
      margin-top: 65px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      div.icon {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        min-width: 115px;
        min-height: 120px;

        img {
          width: 80px;
          height: 80px;
        }
      }
    }
  }

  div.info {
    max-width: 1108px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    div.item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 15px;

      img {
        width: 450px;
        height: 560px;
      }

      div.item-text {
        display: flex;
        flex-direction: column;
        max-width: 500px;

        h3 {
          font-size: 24px;
          margin-bottom: 20px;
          color: #f8e587;
        }

        p {
          font-size: 21px;
          color: #666a86;
          text-align: justify;
        }

        a {
          color: #666a86;
          font-weight: bold;
        }
      }

      &:nth-child(even) {
        flex-direction: row-reverse;
      }
    }

    .btn-propostas {
      display: flex;
      align-items: center;
      justify-content: center;

      button {
        margin: 100px 0;
        height: 65px;
        width: 330px;
        background: #f8e587;
        border-radius: 50px;
        font-size: 18px;
        font-weight: 800;
        color: #666a86;
      }
    }
  }

  div.bottom {
    padding: 50px 0;
    width: 100%;
    display: flex;
    background: #0d0b10;
    justify-content: center;

    img {
      margin-right: 15px;
    }
  }

  @media all and (max-width: 810px) {
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: justify;
      padding: 20px 0;
    }

    div.main img {
      margin-top: 30px;
      width: 280px;
      height: 50%;
    }

    div.middle {
      width: 100%;
      padding: 10px 0;

      div.icons {
        flex-direction: column;
      }
    }

    div.info {
      div.item img {
        width: 230px;
        height: 230px;
      }

      div.item:nth-child(even) {
        flex-direction: column;
      }
    }

    div.bottom {
      flex-direction: row;
      img {
        width: 50px;
        height: 50px;
      }
    }
  }
`;
