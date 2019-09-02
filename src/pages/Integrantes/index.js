import React from 'react';

import Header from '../../components/Header';
import IntegrantCard from '../../components/IntegranteCard';

import { Container, Content } from './styles';

import david from '../../assets/integrantes/david.jpeg';
import manu from '../../assets/integrantes/manu.jpeg';
import everton from '../../assets/integrantes/everton.jpeg';
import leonardo from '../../assets/integrantes/leonardo.jpeg';
import liriel from '../../assets/integrantes/liriel.jpeg';
import kaio from '../../assets/integrantes/kaio.jpeg';
import idalina from '../../assets/integrantes/idalina.jpeg';
import paulo from '../../assets/integrantes/paulo.jpeg';
import jonathan from '../../assets/integrantes/jonathan.jpeg';
import laylla from '../../assets/integrantes/laylla.jpeg';
import iwry from '../../assets/integrantes/iwry.jpeg';
import emanuelle from '../../assets/integrantes/emanuelle.jpeg';

export default function Integrantes() {
  const integrantes = [
    {
      nome: 'Emanuella Sgargtta',
      cargo: 'Presidente',
      imagem: manu,
      turma: 'MECA 1A',
      texto:
        'O interesse pelo Grêmio Estudantil surgiu antes mesmo do meu ingresso no IFPAR. Sempre vi essa entidade como uma necessidade, afinal, ela representa os alunos, busca a solução para os problemas que eles enfrentam no dia a dia e mostra-se como a ponte de comunicação entre os discentes, os servidores e os diversos outros campi. ',
    },
    {
      nome: 'David Lucas',
      cargo: 'Presidente',
      imagem: david,
      turma: 'INFO 3A',
      texto:
        'O meu interesse pelo Grêmio surgiu apenas esse ano, pois foi em 2019 que eu mais me envolvi com ele. Por meio de amizades, percebi que ele não era um centro do qual só “coisas chatas” aconteciam. Assim, meu interesse pelo grêmio cresceu ao ponto de querer ser o presidente de uma chapa. Para mim, o grêmio é agora um lugar de apoio aos estudantes e de interação, do qual não se precisa temer e sim expor suas ideias e conceitos junto a um grupo.',
    },
    {
      nome: 'Jonathan',
      cargo: 'Secretário Geral',
      imagem: jonathan,
      turma: 'MECA 2 SUB',
      texto:
        'Tenho interesse pelo grêmio para que os alunos, em especial do subsequente, tenham maior visibilidade. Pois, quando iniciei meus estudos, percebi uma falta de representatividade para esse período. Sendo assim, por ser aluno desse período, sei as dificuldades dele. Logo, pretendo ser uma ponte para que, desse modo, possamos nos comunicar melhor e assim trazer melhorias para a instituição.',
    },
    {
      nome: 'Vitor Hariel',
      cargo: 'Diretor das Finanças',
      imagem: everton,
      turma: 'INFO 3A',
      texto:
        'Todos sabemos das deficiências que o aplicativo do SUAP tem, então, vamos renovar a experiência dos alunos e alunas, colocando todas as informações necessárias direto no bolso deles. Tenho interesse em me juntar ao grêmio pois estaremos em posição de nos conectarmos diretamente com os alunos e servidores, agindo como representantes para tornar todas as nossas propostas possíveis.',
    },
    {
      nome: 'Laylla',
      cargo: 'Diretora das Finanças',
      imagem: laylla,
      turma: 'INFO 3A',
      texto:
        'Quero fazer parte do Grêmio para poder ajudar os alunos do IFPAR. Quero fazer parte de uma gestão que faça a diferença que realmente represente os alunos.',
    },
    {
      nome: 'Kaio Bressone',
      cargo: 'Diretor de Assistência Estudantil',
      imagem: kaio,
      turma: 'MECA 1V',
      texto:
        'Primeiramente, amo Linkin Park. E minhas intenções nos grêmios são as melhores, principalmente no desenvolvimento de atividades e eventos no campus, além do acolhimento de estudantes.',
    },
    {
      nome: 'Idalina Deirdre',
      cargo: 'Diretora de Relações Sociais',
      imagem: idalina,
      turma: 'MECA 1V',
      texto:
        'Estou participando das eleições na intenção de poder acolher os alunos da mesma forma que fui acolhida pelos integrantes dessa chapa.',
    },
    {
      nome: 'Paulo Roberto',
      cargo: 'Diretor de Arte e Cultura',
      imagem: paulo,
      turma: 'INFO 4A',
      texto:
        'Estou aqui para realizar uma maior disseminação da arte e cultura em nosso Campus, que hoje não é tão bem valorizada pelos alunos. Pretendo atuar por meio de projetos e/ou eventos que tenham ligação com essa área. E no final da gestão, ter como resultado o reconhecimento, por parte dos alunos, das ações realizadas no nosso Campus.',
    },
    {
      nome: 'Éverton Pereira',
      cargo: 'DIretor de Comunicação, Marketing e Relações Sociais',
      imagem: everton,
      turma: 'MECA 1A',
      texto:
        'Estou nessa chapa porque sei que ela é formada por pessoas confiáveis e competentes. Além disso, estou aqui pois acredito que juntos podemos fazer boas ações para a escola.',
    },
    {
      nome: 'Leonardo Silva',
      cargo: 'Diretor de Esporte, Lazer e Qualidade de Vida',
      imagem: laylla,
      turma: 'INFO 1',
      texto:
        'Pretendo ocupar a Diretoria de Esporte e Lazer pois tenho o esporte como uma grande paixão desde infância. E quero ter a oportunidade de tomar a frente disso e executar projetos esportivos pela saúde física e mental.  Gerando entretenimento com espírito pacífico de competitividade em atividades físicas com todos os alunos do campus me enche de força de vontade para fazer com que ninguém fique parado!',
    },
    {
      nome: 'Leo Santos',
      cargo: 'Diretor de Formação Política e Sustentabilidade',
      imagem: leonardo,
      turma: 'MECA 2A',
      texto:
        'Me interesso com o Grêmio Estudantil, pois ao falarmos sobre essa entidade, falamos sobre responsabilidade com os alunos: responsabilidade de ouvir esses e de dar voz a eles. E é com isso que nós, da Chapa Morale, nos preocupamos: com a representatividade dos alunos.',
    },
    {
      nome: 'Liriel Felix',
      cargo: 'Esportes',
      imagem: liriel,
      turma: 'MECA 1A',
      texto:
        'Desde que entrei no IF e soube das eleições para o grêmio fiquei super empolgada! Porém, um tempo se passou e essa ideia esfriou. Até que o corte de verbas foi anunciado pelo governo e o grêmio anterior renunciou. Nesse momento todo aquele desejo e vontade de fazer algo pelo IF voltou... Foi desse jeito que não pensei duas vezes antes de aceitar o convite de participar da Chapa Morale, acredito muito nos meus líderes e sei que, se vencermos, vocês verão um grêmio diferenciado.',
    },
    {
      nome: 'Emanuelle Pereira',
      cargo: 'Diretoria de Representação do RESUB',
      imagem: emanuelle,
      turma: 'REDES 4',
      texto:
        'Estou interessada em fazer parte do grêmio estudantil junto a Chapa Morale, pois desde que ingressei no campus senti a ausência de uma representação do subsequente no grêmio estudantil. Ouvi muitas reclamações por parte dos alunos e, por este motivo, resolvi aceitar o convite da Chapa para integrar-me a ela e assim unirmos nossas ideias e forças para pôr em prática propostas que visem o desenvolvimento do nosso campus.',
    },
    {
      nome: 'Iwry Gabriel',
      cargo: 'Diretoria de Representação do RESUB',
      imagem: iwry,
      turma: 'REDE 2 SUB',
      texto:
        'Me tornei um dos membros da chapa com o intuito de ajudar a melhorar e a sanar as deficiências hoje existentes em nosso campus. Sem medir esforços, quero ajudar a melhorar no que possível nossa instituição. Mas para isso preciso de sua ajuda. Vamos lá e nos ajude nessa nova missão',
    },
  ];

  return (
    <Container>
      <Header />
      <Content>
        {integrantes.map(integrante => (
          <IntegrantCard
            imagem={integrante.imagem}
            nome={integrante.nome}
            cargo={integrante.cargo}
            turma={integrante.turma}
            texto={integrante.texto}
          />
        ))}
      </Content>
    </Container>
  );
}
