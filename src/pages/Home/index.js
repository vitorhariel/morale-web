import React from 'react';
import Fade from 'react-reveal/Fade';

import Header from '../../components/Header';

import people from '../../assets/ilustrations/people.svg';
import hand from '../../assets/icons/handIcon.png';

import bookIcon from '../../assets/icons/bookIcon.png';
import phoneIcon from '../../assets/icons/phoneIcon.png';
import earthIcon from '../../assets/icons/earthIcon.png';

import bookLover from '../../assets/ilustrations/book_lover.svg';
import teamChat from '../../assets/ilustrations/team_chat.svg';
import newspaper from '../../assets/ilustrations/newspaper.svg';

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
              <h2>Lorem ipsum</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button type="button">ALGUMA COISA</button>
            </div>
            <img src={people} alt="Pessoas estudando" />
          </div>
        </Fade>
        <Fade bottom>
          <div className="main-bottom">
            <div className="main-bottom-left">
              <img src={hand} alt="Pessoas estudando" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </p>
            </div>
            <button type="button">VENHA NOS CONHECER!</button>
          </div>
        </Fade>
        <Fade>
          <div className="middle">
            <h2>At vero eos et accusamus et iusto odio</h2>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias
            </p>
            <div className="icons">
              <div className="icon">
                <img src={bookIcon} alt="" />
                <strong>ESTUDAR</strong>
              </div>
              <div className="icon">
                <img src={phoneIcon} alt="" />
                <strong>COMUNICAR</strong>
              </div>
              <div className="icon">
                <img src={earthIcon} alt="" />
                <strong>INTERAGIR</strong>
              </div>
            </div>
          </div>
        </Fade>
        <div className="info">
          <Fade>
            <div className="item">
              <img src={bookLover} alt="Livros" />
              <div className="item-text">
                <h3>
                  Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                  et quasi architecto beatae vitae dicta sunt explicabo.
                </h3>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam.
                </p>
              </div>
            </div>
            <div className="item">
              <img src={teamChat} alt="Time" />
              <div className="item-text">
                <h3>
                  Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                  et quasi architecto beatae vitae dicta sunt explicabo.
                </h3>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam.
                </p>
              </div>
            </div>
            <div className="item">
              <img src={newspaper} alt="Jornal" />
              <div className="item-text">
                <h3>
                  Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                  et quasi architecto beatae vitae dicta sunt explicabo.
                </h3>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam.
                </p>
              </div>
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
