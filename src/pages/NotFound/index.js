import React from 'react';

import { Container } from './styles';

import pageNotFound from '../../assets/ilustrations/page_not_found.svg';

export default function NotFound() {
  return (
    <Container>
      <img src={pageNotFound} alt="404" />
      <h1>Página não encontrada.</h1>
    </Container>
  );
}
