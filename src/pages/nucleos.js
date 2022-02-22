import React, { useEffect } from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";

import Card from "react-bootstrap/Card";

import { Image } from "react-bootstrap";

import pessoa4 from "../images/pessoas/pessoa4.jpg";
import { StaticImage } from "gatsby-plugin-image";
import AOS from "aos";

const Nucleos = () => {
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
      <Seo title="Núcleos" />
      <h1 className="animate__animated animate__zoomIn">núcleos</h1>
      <article className="card-body">
        <StaticImage
          src="../images/pessoas/pessoa4.jpg"
          layout="constrained"
          placeholder="blurred"
          alt="Camylle ao telefone"
          width={700}
          height={500}
          // className="animate__animated animate__zoomIn"
        />
        <p data-aos="zoom-in">
          Na{" "}
          <strong>
            <i> Equipe Mediação</i>
          </strong>{" "}
          existe um trabalho interno que se divide em Núcleos. Esses têm como
          objetivo um bom funcionamento e mantimento da organização interna da
          Equipe. Cada Núcleo é responsável por um grupo de AT’s, que realizam
          os seus trabalhos no consultório da Diretora da Equipe. São eles:
        </p>
        <p data-aos="zoom-in">
          <ul>
            <li>
              <strong>Núcleo Conexão</strong>: É o núcleo responsável pela
              produção e divulgação do conteúdo nas redes sociais, além da
              criação da linha editorial do Instagram da Equipe, de Reels e
              IGTV. O objetivo deste núcleo é ampliar e difundir os
              conhecimentos sobre acompanhamento terapêutico e análise do
              comportamento aplicada, além de divulgar os trabalhos e projetos
              realizados pela equipe. Os estagiários são responsáveis pela
              criação da linha editorial de cada mês e semanalmente, o núcleo se
              reúne para dividir as tarefas de criação entre os estagiários.
            </li>
            <li>
              <strong>Núcleo Escolar</strong>: É o núcleo responsável pela
              supervisão e orientação dos acompanhantes terapêuticos escolares.
              Surgiu devido ao aumento da demanda da Equipe para a área escolar.
              A responsável por esse núcleo é a psicóloga infantil e escolar
              Maria Clara Medeiros. As reuniões objetivam a resolução de
              dúvidas, relato de observações e das atividades realizadas na
              escola. Os encontros são conduzidos sob a orientação da
              supervisora do Núcleo, visando sempre o trabalho em conjunto com
              as equipes ABA e multidisciplinar do paciente.
            </li>
            <li>
              <strong>Núcleo Trilho</strong>: É o núcleo responsável pela
              confecção de materiais da equipe. Consiste em deixar os materiais
              prontos para serem utilizados pelos pacientes, sendo feito um
              trabalho manual de corte e plastificação desses recursos. A equipe
              disponibiliza os instrumentos necessários para cada paciente, eles
              recebem uma pasta de materiais mensalmente com os recursos para a
              intervenção. É necessário que esses estímulos sejam trocados uma
              vez no mês e a confecção é realizada no consultório, Crescer
              Espaço Terapêutico Multidisciplinar.
            </li>
            <li>
              <strong>Núcleo Estação</strong>: Este núcleo é responsável pela
              criação de materiais para os pacientes da equipe, alguns deles são
              disponibilizados nas redes sociais. O núcleo estação foi criado
              pela necessidade de variação de estímulos para os pacientes. Esse
              material é passado por Camylle Azevedo, os estagiários recebem
              suporte do núcleo Impulso, caso apresentem dificuldade na produção
              do material, podendo solicitar reuniões de treinamento para a
              criação. Os estagiários desse núcleo fazem um recurso a cada 15
              dias.
            </li>
            <li>
              <strong>Núcleo Impulso</strong>: Toda a distribuição dos núcleos é
              feita pelo núcleo impulso. Este é o núcleo central da equipe,
              responsável por acolher, observar, organizar e desenvolver os
              processos internos, visando uma qualidade de serviço para os
              estagiários quanto para as famílias. É composto por Camylle
              Azevedo, idealizadora da Equipe Mediação e psicóloga infantil ABA,
              Maria Clara Medeiros, psicóloga infantil e coordenadora de
              operações da equipe, Rose Leal, psicóloga ABA e coordenadora de
              conhecimento da equipe, Geisa Tamires, estudante de psicologia e
              analista de produtividade da equipe, Juliana Karine, estudante de
              psicologia e analista de acolhimento da equipe e Albertina
              Menezes, estudante de psicologia e analista de projetos da equipe.{" "}
            </li>
            <li>
              <strong>Núcleo Inovação</strong>: É um projeto de capacitação
              educacional, realizado pela equipe mediação, com objetivo de
              oferecer um serviço de qualidade e proporcionar um melhor
              entendimento sobre Análise Comportamental Aplicada, impulsionando
              o desenvolvimento profissional dos estagiários. Os conteúdos das
              aulas são referentes a Análise Comportamental Aplicada,
              contextualizando a parte teórica com a prática.
            </li>
          </ul>
        </p>
      </article>
      {/* <Card>
        <Card.Body>
          <Card.Title className="mb-2">
            <Card.Img
              className="animate__animated animate__zoomIn"
              variant="top"
              as={Image}
              src={pessoa4}
              fluid={true}
              alt="pessoas"
            />
          </Card.Title>

          <Card.Text>
            <p data-aos="zoom-in">
              Na{" "}
              <strong>
                <i> Equipe Mediação</i>
              </strong>{" "}
              existe um trabalho interno que se divide em Núcleos. Esses têm
              como objetivo um bom funcionamento e mantimento da organização
              interna da Equipe. Cada Núcleo é responsável por um grupo de AT’s,
              que realizam os seus trabalhos no consultório da Diretora da
              Equipe. São eles:
            </p>
            <p data-aos="zoom-in">
              <ul>
                <li>
                  <strong>Núcleo Conexão</strong>: É o núcleo responsável pela
                  produção e divulgação do conteúdo nas redes sociais, além da
                  criação da linha editorial do Instagram da Equipe, de Reels e
                  IGTV. O objetivo deste núcleo é ampliar e difundir os
                  conhecimentos sobre acompanhamento terapêutico e análise do
                  comportamento aplicada, além de divulgar os trabalhos e
                  projetos realizados pela equipe. Os estagiários são
                  responsáveis pela criação da linha editorial de cada mês e
                  semanalmente, o núcleo se reúne para dividir as tarefas de
                  criação entre os estagiários.
                </li>
                <li>
                  <strong>Núcleo Escolar</strong>: É o núcleo responsável pela
                  supervisão e orientação dos acompanhantes terapêuticos
                  escolares. Surgiu devido ao aumento da demanda da Equipe para
                  a área escolar. A responsável por esse núcleo é a psicóloga
                  infantil e escolar Maria Clara Medeiros. As reuniões objetivam
                  a resolução de dúvidas, relato de observações e das atividades
                  realizadas na escola. Os encontros são conduzidos sob a
                  orientação da supervisora do Núcleo, visando sempre o trabalho
                  em conjunto com as equipes ABA e multidisciplinar do paciente.
                </li>
                <li>
                  <strong>Núcleo Trilho</strong>: É o núcleo responsável pela
                  confecção de materiais da equipe. Consiste em deixar os
                  materiais prontos para serem utilizados pelos pacientes, sendo
                  feito um trabalho manual de corte e plastificação desses
                  recursos. A equipe disponibiliza os instrumentos necessários
                  para cada paciente, eles recebem uma pasta de materiais
                  mensalmente com os recursos para a intervenção. É necessário
                  que esses estímulos sejam trocados uma vez no mês e a
                  confecção é realizada no consultório, Crescer Espaço
                  Terapêutico Multidisciplinar.
                </li>
                <li>
                  <strong>Núcleo Estação</strong>: Este núcleo é responsável
                  pela criação de materiais para os pacientes da equipe, alguns
                  deles são disponibilizados nas redes sociais. O núcleo estação
                  foi criado pela necessidade de variação de estímulos para os
                  pacientes. Esse material é passado por Camylle Azevedo, os
                  estagiários recebem suporte do núcleo Impulso, caso apresentem
                  dificuldade na produção do material, podendo solicitar
                  reuniões de treinamento para a criação. Os estagiários desse
                  núcleo fazem um recurso a cada 15 dias.
                </li>
                <li>
                  <strong>Núcleo Impulso</strong>: Toda a distribuição dos
                  núcleos é feita pelo núcleo impulso. Este é o núcleo central
                  da equipe, responsável por acolher, observar, organizar e
                  desenvolver os processos internos, visando uma qualidade de
                  serviço para os estagiários quanto para as famílias. É
                  composto por Camylle Azevedo, idealizadora da Equipe Mediação
                  e psicóloga infantil ABA, Maria Clara Medeiros, psicóloga
                  infantil e coordenadora de operações da equipe, Rose Leal,
                  psicóloga ABA e coordenadora de conhecimento da equipe, Geisa
                  Tamires, estudante de psicologia e analista de produtividade
                  da equipe, Juliana Karine, estudante de psicologia e analista
                  de acolhimento da equipe e Albertina Menezes, estudante de
                  psicologia e analista de projetos da equipe.{" "}
                </li>
                <li>
                  <strong>Núcleo Inovação</strong>: É um projeto de capacitação
                  educacional, realizado pela equipe mediação, com objetivo de
                  oferecer um serviço de qualidade e proporcionar um melhor
                  entendimento sobre Análise Comportamental Aplicada,
                  impulsionando o desenvolvimento profissional dos estagiários.
                  Os conteúdos das aulas são referentes a Análise Comportamental
                  Aplicada, contextualizando a parte teórica com a prática.
                </li>
              </ul>
            </p>
          </Card.Text>
        </Card.Body>
      </Card> */}
    </Layout>
  );
};

export default Nucleos;
