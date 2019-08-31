import styled from 'styled-components';

export const Container = styled.div`
  div.content {
    max-width: 1108px;
    margin: 30px auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      margin-bottom: 20px;
      color: #fff;
    }

    div.pdf {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      div.pages {
        margin-top: 10px;

        display: flex;
        justify-content: center;
        align-items: center;

        p {
          font-size: 24px;
          color: #fff;
        }
      }
    }
  }
`;
