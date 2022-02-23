// 15.02.2022
// Chegamos ontem de viagem do Rio. Eu com bastante catarro, ouvidos entupidos, moco moco, Susi amolecendo e Diana tb.

import React, { useEffect } from "react";
import { graphql } from "gatsby";
import { StaticImage, GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";

import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import "aos/dist/aos.css";
import AOS from "aos";

// bootstrap
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";

// components
import Equipe from "../components/equipe";
import Acompanhante from "../components/acompanhante";
import Aba from "../components/aba";
import Contatos from "../components/contatos";
const IndexPage = ({ data }) => {
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
      <Seo title="Home" />
      <Container id="logo">
        <Col>
          <StaticImage
            src="../images/mediacao-subtitulo.png"
            quality={95}
            width={600}
            alt="Logo da equipe Mediação"
            placeholder="blurred"
            className="animate__animated animate__zoomIn"
          />
        </Col>

        <Carousel className="carousel">
          {data.slideShow.edges.map(({ node }) => (
            <Carousel.Item key={node.id}>
              <GatsbyImage
                image={node.childImageSharp.gatsbyImageData}
                alt={node.base.split("-").join(" ").split(".")[0]}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
      <Equipe />
      <Aba />
      <Acompanhante />
      <Contatos />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    slideShow: allFile(filter: { relativeDirectory: { eq: "pessoas" } }) {
      edges {
        node {
          id
          relativePath
          base
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              height: 900
              width: 900
              quality: 70
              transformOptions: { cropFocus: CENTER, fit: COVER }
            )
          }
        }
      }
    }
  }
`;
