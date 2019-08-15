import React from 'react';
import { Link } from 'react-router-dom';

import history from '../../services/history';

import logo from '../../assets/logo.svg';

import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <div className="header-left">
        <Link to="/">
          <img src={logo} alt="Morale" />
          <h1>Morale</h1>
        </Link>
      </div>
      <div className="header-right">
        <Link to="contato">Contato</Link>
        <button type="button" onClick={() => history.push('login')}>
          ENTRAR
        </button>
      </div>
    </Container>
  );
}
