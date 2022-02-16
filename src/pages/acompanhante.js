import React, { useEffect } from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";

import Card from "react-bootstrap/Card";

import { Image } from "react-bootstrap";

import pessoa2 from "../images/pessoas/pessoa2.jpg";
import AOS from "aos";

const Acompanhante = () => {
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
      <Seo title="Acompanhante Domiciliar/Escolar" />
      <h1>Acompanhante Domiciliar/Escolar</h1>
      <Card>
        <Card.Body>
          <Card.Title className="mb-2">
            <Card.Img
              className="animate__animated animate__zoomIn"
              variant="top"
              as={Image}
              src={pessoa2}
              fluid={true}
              alt="pessoas"
            />
          </Card.Title>

          <Card.Text>
            <p data-aos="zoom-in">
              Dentro da{" "}
              <strong>
                <i> Equipe Mediação</i>
              </strong>{" "}
              oferecemos os serviços de acordo com a demanda da criança e da
              família. Por isso, além do acompanhamento domiciliar, também temos
              a possibilidade do acompanhamento terapêutico no ambiente escolar
              da criança.
            </p>
            <p data-aos="zoom-in">
              O AT que atua no contexto domiciliar, nos seus dias de
              intervenção, aplicará diariamente os programas ABA selecionados
              pela psicóloga da equipe. Uma vez por semana, o AT será
              supervisionado pela psicóloga, juntamente com a criança em casa.
              Pode se utilizar da criatividade e de recursos ou brinquedos que
              estejam no ambiente para o seu trabalho, optando por um ensino
              estruturado, naturalístico ou discreto. O objetivo é que a criança
              adquira independência nos programas propostos e a cada mês venha a
              realizar novos programas, adquirindo e generalizando novas
              habilidades.
            </p>
            <p data-aos="zoom-in">
              Já o AT escolar, atuará dentro da escola da criança de acordo com
              a sua demanda. Trabalhará juntamente com a supervisora escolar da
              Equipe, a psicóloga escolar Maria Clara, com supervisões e
              reuniões uma vez por semana, para definir estratégias de
              intervenção com a criança. Essas estratégias dependerão de como a
              criança é dentro desse contexto, quais comportamentos estão sendo
              relevantes, quais estão sendo inadequados, quais comportamentos
              são necessários para a criança adquirir na rotina da escola. Além
              disso, pode se trabalhar as dificuldades da criança e as
              adaptações escolares para o melhor desenvolvimento e promoção de
              autonomia dela naquele ambiente.
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Layout>
  );
};

export default Acompanhante;
