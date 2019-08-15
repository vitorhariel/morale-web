import React from 'react';

import logo from '../../assets/logo.svg';

import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <div className="header-left">
        <img src={logo} alt="Morale" />
        <h1>Morale</h1>
      </div>
      <div className="header-right">
        <span>Contato</span>
        <button type="button">SAIBA MAIS</button>
      </div>
    </Container>
  );
}
