import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;

  max-width: 1108px;
  margin: 0 auto;
  padding: 10px 30px;

  @media all and (max-width: 1210px) {
    justify-content: center;
  }
`;
