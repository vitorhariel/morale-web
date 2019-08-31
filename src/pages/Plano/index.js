import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import Fade from 'react-reveal/Fade';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import Header from '../../components/Header';

import PLANO from '../../assets/PLANO.pdf';

import { Container } from './styles';

export default function Plano() {
  const [totalNumPages, setTotalNumPages] = useState(null);
  const [page, setPage] = useState(1);

  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  function documentLoadSuccess({ numPages }) {
    setTotalNumPages(numPages);
  }

  function handlePage(num) {
    if ((page <= 1 && num === -1) || (page >= totalNumPages && num === 1))
      return;

    setPage(page + num);
  }

  return (
    <Container>
      <Header />
      <Fade>
        <div className="content">
          <h1>Plano de Ação</h1>

          <div className="pdf">
            <Document
              file={PLANO}
              onLoadSuccess={documentLoadSuccess}
              loading={<h3>Carregando...</h3>}
            >
              <Page pageNumber={page} />
            </Document>
            <div className="pages">
              <MdChevronLeft
                size={42}
                color="#fff"
                onClick={() => handlePage(-1)}
              />

              <p>
                Pagina {page} de {totalNumPages}
              </p>

              <MdChevronRight
                size={42}
                color="#fff"
                onClick={() => handlePage(1)}
              />
            </div>
          </div>
        </div>
      </Fade>
    </Container>
  );
}
