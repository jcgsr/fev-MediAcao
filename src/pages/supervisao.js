import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";

import Card from "react-bootstrap/Card";

import { Image } from "react-bootstrap";

import camylle from "../images/pessoas/camylle.jpeg";
import AOS from "aos";
AOS.init();
const Supervisao = () => {
  return (
    <Layout>
      <Seo title="Supervisão" />
      <h1>supervisão</h1>
      <Card>
        <Card.Body>
          <Card.Title className="mb-2">
            <Card.Img
              className="animate__animated animate__zoomIn"
              variant="top"
              as={Image}
              src={camylle}
              fluid={true}
              alt="pessoas"
            />
          </Card.Title>

          <Card.Text>
            <p data-aos="zoom-in">
              Atualmente, a{" "}
              <strong>
                <i> Equipe Mediação</i>
              </strong>{" "}
              conta com 3 psicólogas especializadas na área da análise
              comportamental aplicada e supervisoras dos acompanhantes
              terapêuticos. São elas,{" "}
              <a href="https://www.camylleazevedo.com.br/">Camylle Azevedo</a>,
              Maria Clara Medeiros e Rose Leal.
            </p>
            <p data-aos="zoom-in">
              As supervisões da Equipe têm como objetivo a qualificação,
              direcionamento e orientação dos acompanhantes terapêuticos de
              acordo com as demandas trazidas em cada caso.
            </p>
            <p data-aos="zoom-in">
              A supervisão é a oportunidade que o AT tem de conversar com a
              profissional sobre o caso no qual está trabalhando, o que tem
              acontecido durante a semana, como pode agir em determinadas
              situações, se está com alguma dificuldade etc.
            </p>
            <p data-aos="zoom-in">
              As supervisões são realizadas uma vez por semana durante 2 horas,
              juntamente com a criança e o AT.
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Layout>
  );
};

export default Supervisao;
