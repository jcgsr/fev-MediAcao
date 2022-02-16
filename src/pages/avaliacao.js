import React, { useEffect } from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";

import Card from "react-bootstrap/Card";

import { Image } from "react-bootstrap";

import pessoas2 from "../images/pessoas/pessoas2.jpg";

import AOS from "aos";

const Avaliacao = () => {
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
      <Seo title="Avaliação" />
      <h1>avaliação</h1>
      <Card>
        <Card.Body>
          <Card.Title className="mb-2">
            <Card.Img
              className="animate__animated animate__zoomIn"
              variant="top"
              as={Image}
              src={pessoas2}
              fluid={true}
              alt="pessoas"
            />
          </Card.Title>

          <Card.Text>
            <p data-aos="zoom-in">
              A avaliação é realizada através dos princípios da Análise do
              Comportamento e envolve a observação da criança nos seus ambientes
              naturais, além do consultório. Desse modo, teremos uma amostra
              significativa dos comportamentos-alvos e, consequentemente, mais
              condições de planejar uma Terapia ABA eficiente e individualizada.
              Para a realização da avaliação, são utilizados instrumentos
              padronizados. Eles também servirão de informação sobre os
              comportamentos que serão alvos da intervenção ABA intensiva.
              Alguns deles são: VB-MAPP, ABLA, ABLLS.
            </p>
            <p data-aos="zoom-in">
              Os principais ambientes em que observamos os comportamentos da
              criança são: consultório, casa e escola. No consultório, o
              analista do comportamento tem a possibilidade de observar os
              comportamentos da criança de forma mais estruturada e controlada,
              estabelecendo estratégias e condições do ambiente para examinar se
              e de que maneira a criança responde a determinados estímulos.
            </p>
            <p data-aos="zoom-in">
              A avaliação na casa da criança prioriza a observação dos
              comportamentos em sua rotina habitual, nas interações com pessoas
              desse ambiente e nas principais situações do dia a dia. Nesse
              ambiente também temos a oportunidade de observar as principais
              habilidades já adquiridas pela criança, bem como suas principais
              dificuldades. São observados comportamentos como: interação,
              comunicação, manejo de brinquedos e habilidades relacionadas ao
              brincar, autonomia nas atividades de vida diária etc.
            </p>
            <p data-aos="zoom-in">
              Para completar o processo de avaliação, observamos a criança no
              ambiente escolar (quando a criança já o frequenta). De forma
              equivalente ao que é observado na casa, na escola são observados e
              avaliados comportamentos como interação com pares e professores,
              habilidades relacionadas ao brincar e manejo de brinquedos nesse
              ambiente, habilidades relacionadas à autonomia e seguimento da
              rotina escolar, habilidades relacionadas ao desempenho acadêmico,
              principais dificuldades etc.
            </p>

            <p data-aos="zoom-in">
              O processo de avaliação comportamental inicial só é finalizado
              depois de sistematizadas as informações sobre os
              comportamentos-alvos obtidas nos três ambientes: consultório, casa
              e escola. Eventualmente outros contextos também podem ser
              observados como sessões com outros profissionais que trabalham com
              a criança. Ao término desse processo são fechadas as metas
              iniciais de intervenção e combinado com a equipe (família,
              profissionais, escola) os procedimentos e estratégias que serão
              aplicados.
            </p>
            <p data-aos="zoom-in">
              A avaliação comportamental é um processo contínuo, inerente a todo
              o período de intervenção ABA intensiva. Pode e deve ser realizada
              ao primeiro sinal de atraso de desenvolvimento da criança.
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Layout>
  );
};

export default Avaliacao;
