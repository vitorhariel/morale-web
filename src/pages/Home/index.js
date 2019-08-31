import React from 'react';
import Fade from 'react-reveal/Fade';
import { Link as ScrollLink } from 'react-scroll';

import history from '../../services/history';

import Header from '../../components/Header';

import people from '../../assets/ilustrations/people.svg';
import hand from '../../assets/icons/handIcon.png';

import bookIcon from '../../assets/icons/bookIcon.png';
import phoneIcon from '../../assets/icons/phoneIcon.png';
import earthIcon from '../../assets/icons/earthIcon.png';

import security from '../../assets/ilustrations/security.svg';
import phone from '../../assets/ilustrations/phone.svg';
import playing from '../../assets/ilustrations/playing.svg';

import insta from '../../assets/social/insta.png';
import twitter from '../../assets/social/twitter.png';
import facebook from '../../assets/social/facebook.png';

import { Container, Content } from './styles';

export default function Home() {
  return (
    <Container>
      <Header />
      <Content>
        <Fade>
          <div className="main">
            <div>
              <h2>Ousar é fazer</h2>
              <p>
                Temos o desejo de fazer com que o Grêmio Estudantil volte a ser
                ativo, servindo de guia e dando apoio para cada estudante do
                IFPAR.
              </p>
              <ScrollLink smooth to="propostas">
                <button type="button">NOSSAS PROPOSTAS</button>
              </ScrollLink>
            </div>
            <img src={people} alt="Pessoas estudando" />
          </div>
        </Fade>
        <Fade bottom>
          <div className="main-bottom">
            <div className="main-bottom-left">
              <img src={hand} alt="Hey!" />
              <p>
                Somos um grupo de amigos empenhados à servir os alunos. Saiba
                quem somos nós!
              </p>
            </div>
            <button
              type="button"
              className="main"
              onClick={() => history.push('integrantes')}
            >
              CONHEÇA NOSSOS INTEGRANTES!
            </button>
          </div>
        </Fade>
        <Fade>
          <div className="middle">
            <h2>Nossos ideais</h2>
            <p>
              Do latim, singular e neutro, "Morales" significa "Moral". E,
              entendendo "Moral" como um conjunto de ações que orientam o
              comportamento humano, não haveria melhor nome para representar o
              que queremos ser. Afinal, é do nosso interesse servir de guia para
              os alunos do IFPAR e servir de apoio para o desenvolvimento
              acadêmico, social e psicológico de cada estudante.
            </p>
            <div className="icons">
              <div className="icon">
                <img src={bookIcon} alt="" />
                <strong>DEDICAÇÃO</strong>
              </div>
              <div className="icon">
                <img src={phoneIcon} alt="" />
                <strong>COMUNICAÇÃO</strong>
              </div>
              <div className="icon">
                <img src={earthIcon} alt="" />
                <strong>INCLUSÃO</strong>
              </div>
            </div>
          </div>
        </Fade>
        <div className="info" id="propostas">
          <Fade>
            <div className="item">
              <img src={phone} alt="Time" />
              <div className="item-text">
                <h3>APP MONITORY E A DIGITALIZAÇÃO DA INFORMAÇÃO</h3>
                <p>
                  Queremos facilitar a vida dos estudantes, tornando-a cada vez
                  mais facil e ajudando eles a focarem no que importa. O
                  aplicativo para celular{' '}
                  <a href="https://play.google.com/store/apps/details?id=com.monitory">
                    Monitory
                  </a>{' '}
                  tem como objetivo ajudar na comunicação dos alunos com o
                  Grêmio e servidores, além de ajuda-los a ver suas notas,
                  horários, materiais de aula e ter acesso a notícias e eventos
                  do campus.
                </p>
              </div>
            </div>
            <div className="item">
              <img src={security} alt="Livros" />
              <div className="item-text">
                <h3>POLICIAMENTO</h3>
                <p>
                  Iniciamente, queremos melhorar a seguranca dos alunos em três
                  vertentes: policiamento, alterações no portão em frente à BR e
                  campanhas de conscientização. Demandaremos um aumento na ronda
                  escolar aos arredores da nossa instituiçao, propomos deslocar
                  o portao da saída junto ao Diretor Filipe Quintaes à BR para
                  aumentar a segurança dos alunos e a participacão dos
                  terceirizados, especializados na segurança da escika.
                </p>
              </div>
            </div>
            <div className="item">
              <img src={playing} alt="Jornal" />
              <div className="item-text">
                <h3>RECREAÇÃO E LAZER AOS ESTUDANTES</h3>
                <p>
                  Todos somos humanos e sabemos o quao cansativo pode ser a vida
                  de um estudante. Iniciando no período de campanha, abriremos
                  formulários para que possamos recolher as opiniões dos alunos
                  a respeito de mudanças no CV (Centro de Convivência) para
                  tornar o dia do estudante um pouco mais leve.
                </p>
              </div>
            </div>
            <div className="btn-propostas">
              <button type="button" onClick={() => history.push('plano')}>
                VEJA TODAS AS NOSSAS PROPOSTAS
              </button>
            </div>
          </Fade>
        </div>
        <div className="bottom">
          <img src={facebook} alt="Facebook" />
          <img src={insta} alt="Instagram" />
          <img src={twitter} alt="Twitter" />
        </div>
      </Content>
    </Container>
  );
}
