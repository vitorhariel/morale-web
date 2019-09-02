import styled from 'styled-components';

export const Container = styled.div`
  padding: 15px;
  background: #320470;
  margin-bottom: 30px;
  margin-left: 20px;
  color: #fff;
  transition: all 0.2s ease-in-out;

  .foto {
    height: 290px;
    margin-bottom: 5px;
  }

  &:hover {
    transform: scale(1.025);
  }

  h2 {
    max-width: 290px;
  }

  p {
    max-width: 290px;
  }
`;
