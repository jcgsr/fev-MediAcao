import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";

import Card from "react-bootstrap/Card";

import { Image } from "react-bootstrap";

import pessoas4 from "../images/pessoas/pessoas4.jpg";
import AOS from "aos";

const Aba = () => {
  useEffect(() => {
    /**
     * Server-side rendering does not provide the 'document' object
     * therefore this import is required either in useEffect or componentDidMount as they
     * are exclusively executed on a client
     */
    const AOS = require("aos");
    AOS.init({
      once: true,
    });
  }, []);

  useEffect(() => {
    if (AOS) {
      AOS.refresh();
    }
  });
  return (
    <Layout>
      <Seo title="Intervenção ABA Intensiva" />
      <h1 className="animate__animated animate__zoomIn">
        Intervenção ABA Intensiva
      </h1>
      <Card>
        <Card.Body>
          <Card.Title className="mb-2">
            <Card.Img
              className="animate__animated animate__zoomIn"
              variant="top"
              as={Image}
              src={pessoas4}
              fluid={true}
              alt="pessoas"
            />
          </Card.Title>

          <Card.Text>
            <p data-aos="zoom-in">
              A Análise do Comportamento Aplicada (ABA) é uma ciência que deriva
              dos princípios da análise do comportamento e tem como objetivo
              implementar comportamentos socialmente relevantes e adequado nas
              pessoas, fazendo com que o indivíduo seja capaz de acessar itens,
              atividades e ambientes que promovam o seu desenvolvimento e
              bem-estar, o tornando independente.
            </p>
            <p data-aos="zoom-in">
              Oferecemos na nossa equipe o trabalho com a intervenção ABA de
              maneira intensiva. Dentro de nosso trabalho, temos como objetivo:
            </p>
            <p data-aos="zoom-in">
              <ol type="A">
                <li>Obter mudanças no comportamento da criança.</li>
                <li>Adquirir uma função mais adaptativa nesses novos </li>
                <li>
                  A generalização dos novos comportamentos, ou seja, que eles
                  sejam mantidos ao longo do tempo.{" "}
                </li>
              </ol>
            </p>
            <p data-aos="zoom-in">
              As intervenções são individualizadas e bem estruturadas,
              possuindo, a ciência ABA a melhor evidência empírica de sucesso e
              um padrão extremamente eficaz no tratamento de crianças com
              atrasos do desenvolvimento.
            </p>
            <p data-aos="zoom-in">
              O processo da intervenção ABA intensiva se dá em 4 fases:
            </p>
            <p data-aos="zoom-in">
              <ol type="1">
                <li>AVALIAÇÃO</li>
                <li>
                  SELEÇÃO E TREINAMENTO TEÓRICO DO AT ( avaliação de currículos,
                  entrevistas e minicurso teórico)
                </li>
                <li>
                  TREINAMENTO PRÁTICO DO AT ( durante 1 mês, o acompanhante
                  terapêutico é treinado pela equipe juntamente com a criança de
                  maneira intensiva)
                </li>
                <li>INÍCIO DA TERAPIA ABA</li>
              </ol>
            </p>
            <p data-aos="zoom-in">
              A estrutura da terapia ABA intensiva se dá a partir de 10 a 15
              horas de intervenção semanal com o AT; 2 horas de supervisão com o
              psicólogo e AT da equipe, junto com a criança; 2 horas de reunião
              mensal da equipe e 1 hora de reunião mensal com a família.
            </p>
            <p data-aos="zoom-in">
              Também oferecemos dentro do serviço da Intervenção ABA Intensiva,
              o acolhimento e suporte a família, com direito a treinamento e
              orientação parental, reuniões e visitas a outros contextos da
              criança, por exemplo, a escola. Esse trabalho tem como objetivo
              expandir as ações da psicoterapia para outros ambientes além do
              consultório clínico, a fim de que a criança tenha ganhos maiores
              em sua intervenção.
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Layout>
  );
};

export default Aba;
