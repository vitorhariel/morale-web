import React from 'react';
import { Link } from 'react-router-dom';

import history from '../../services/history';

import logo from '../../assets/morale-dark.png';

import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <div className="header-left">
        <Link to="/">
          <img src={logo} alt="Morale" />
        </Link>
      </div>
      <div className="header-right">
        <Link to="integrantes">Integrantes</Link>
        <button type="button" onClick={() => history.push('plano')}>
          PLANO DE AÇÃO
        </button>
      </div>
    </Container>
  );
}
