import React from 'react';

import { Container } from './styles';

export default function IntegranteCard({ imagem, cargo, nome, texto }) {
  return (
    <Container>
      <img className="foto" src={imagem} alt={nome} />
      <h2>{cargo}</h2>
      <p>{texto}</p>
    </Container>
  );
}
