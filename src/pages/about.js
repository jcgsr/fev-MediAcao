import React, { useEffect } from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

import Card from "react-bootstrap/Card";

import { Image } from "react-bootstrap";

import pessoas5 from "../images/pessoas/pessoas5.jpg";
import AOS from "aos";

const About = () => {
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
      <Seo title="Sobre" />
      <h1>quem somos</h1>
      <Card>
        <Card.Body>
          <Card.Title className="mb-2">
            <Card.Img
              className="animate__animated animate__zoomIn"
              variant="top"
              as={Image}
              src={pessoas5}
              fluid={true}
              alt="pessoas"
            />
          </Card.Title>

          <Card.Text>
            <p data-aos="zoom-in">
              A
              <strong>
                <i> Equipe Mediação</i>
              </strong>{" "}
              é formada por um grupo de psicólogas (os) e estudantes de
              psicologia em formação. Tem como diretora a psicóloga infantil e
              analista do comportamento{" "}
              <a href="https://www.camylleazevedo.com.br/">Camylle Azevedo</a> e
              atualmente é composta por 3 psicólogas/supervisoras, 13
              acompanhantes terapêuticos e 3 analistas responsáveis pelo suporte
              da equipe. Dentro da equipe, trabalhamos com supervisões e
              atendimentos (domiciliar/escolar) de terapia intensiva para
              crianças com atrasos ou transtornos do desenvolvimento.{" "}
            </p>
            <p data-aos="zoom-in">
              As supervisões são realizadas pelas psicólogas da{" "}
              <strong>
                <i>Equipe Mediação</i>
              </strong>
              {""}e os atendimentos feitos diariamente pelos estagiários de
              psicologia, que atuam como acompanhante terapêutico da criança,
              aplicando a ciência ABA (Análise do Comportamento Aplicada) como
              base para seu trabalho. Possuímos, dentro da equipe, uma formação
              continuada para nossos estagiários a fim de que aprimorem a teoria
              e a prática dentro de seu contexto, seja ele escolar ou
              domiciliar. Além disso, também existe um trabalho interno que se
              divide em núcleos para um bom funcionamento e mantimento da
              organização interna da{" "}
              <strong>
                <i>Equipe</i>
              </strong>
              .{" "}
            </p>
            <p data-aos="zoom-in">
              A{" "}
              <strong>
                <i>Equipe Mediação</i>
              </strong>{" "}
              tem como ideal o acolher para desenvolver. Acreditamos que um
              acolhimento de qualidade é essencial para o desenvolvimento, não
              só das crianças, mas de toda a equipe, como a família da criança,
              as pessoas que participam de sua vida e os outros profissionais
              que trabalham com ela. Ademais, visamos para os nossos membros de
              equipe, um crescimento profissional de qualidade, através do nosso
              plano de carreira que vai desde o AT (acompanhante terapêutico)
              até Coordenador. Por fim, prezamos sempre e essencialmente pela
              comunicação interna/externa da Equipe e a temos como um ponto
              fortíssimo em nosso trabalho.
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Layout>
  );
};

export default About;
