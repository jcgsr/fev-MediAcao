import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";

import Card from "react-bootstrap/Card";

import { Image } from "react-bootstrap";

import pessoas3 from "../images/pessoas/pessoas3.jpg";
import AOS from "aos";
AOS.init();

const CargaHoraria = () => {
  return (
    <Layout>
      <Seo title="Carga Horária" />
      <h1>carga horária</h1>
      <Card>
        <Card.Body>
          <Card.Title className="mb-2">
            <Card.Img
              className="animate__animated animate__zoomIn"
              variant="top"
              as={Image}
              src={pessoas3}
              fluid={true}
              alt="pessoas"
            />
          </Card.Title>

          <Card.Text>
            <p data-aos="zoom-in">
              A Equipe Mediação trabalha com uma carga horaria de 20 horas
              semanais. Por isso, sempre em seleções de currículos para vagas de
              novos AT’s, enfatizamos a necessidade de disponibilidade entre os
              dois turnos (manhã/tarde).
            </p>
            <p data-aos="zoom-in">
              Essas 20 horas semanais são distribuídas entre os atendimentos dos
              pacientes (principal e secundário) além das responsabilidades
              internas da Equipe. São elas:
            </p>
            <p data-aos="zoom-in">
              <ul>
                <li>Participação das reuniões;</li>
                <li>Participação nos núcleos da equipe;</li>
                <li>
                  Participação nas aulas oferecidas de formação continuada;
                </li>
                <li>Entrega de protocolos internos dos pacientes.</li>
              </ul>
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Layout>
  );
};

export default CargaHoraria;
