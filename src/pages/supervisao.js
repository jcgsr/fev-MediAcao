import React, { useEffect } from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";

import { StaticImage } from "gatsby-plugin-image";
import AOS from "aos";

const Supervisao = () => {
  useEffect(() => {
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
      <Seo title="Supervisão" />
      <h1 className="animate__animated animate__zoomIn">supervisão</h1>
      <article className="card-body">
        <StaticImage
          src="../images/pessoas/camylle.jpeg"
          layout="constrained"
          placeholder="blurred"
          alt="Foto de Camylle"
          width={700}
          height={700}
          // className="animate__animated animate__zoomIn"
        />
        <p data-aos="zoom-in">
          Atualmente, a{" "}
          <strong>
            <i> Equipe Mediação</i>
          </strong>{" "}
          conta com 3 psicólogas especializadas na área da análise
          comportamental aplicada e supervisoras dos acompanhantes terapêuticos.
          São elas,{" "}
          <a href="https://www.camylleazevedo.com.br/">Camylle Azevedo</a>,
          Maria Clara Medeiros e Rose Leal.
        </p>
        <p data-aos="zoom-in">
          As supervisões da Equipe têm como objetivo a qualificação,
          direcionamento e orientação dos acompanhantes terapêuticos de acordo
          com as demandas trazidas em cada caso.
        </p>
        <p data-aos="zoom-in">
          A supervisão é a oportunidade que o AT tem de conversar com a
          profissional sobre o caso no qual está trabalhando, o que tem
          acontecido durante a semana, como pode agir em determinadas situações,
          se está com alguma dificuldade etc.
        </p>
        <p data-aos="zoom-in">
          As supervisões são realizadas uma vez por semana durante 2 horas,
          juntamente com a criança e o AT.
        </p>
      </article>
      {/* <Card>
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
      </Card> */}
    </Layout>
  );
};

export default Supervisao;
