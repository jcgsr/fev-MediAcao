// 15.02.2022
// Chegamos ontem de viagem do Rio. Eu com bastante catarro, ouvidos entupidos, moco moco, Susi amolecendo e Diana tb.

import React, { useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";

import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import "aos/dist/aos.css";
import AOS from "aos";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

const IndexPage = () => {
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
      <Seo title="Home" />
      <Container id="logo">
        <Col>
          <StaticImage
            src="../images/mediacao-subtitulo.png"
            quality={95}
            width={600}
            alt="A Gatsby astronaut"
            placeholder="blurred"
          />
        </Col>
      </Container>
    </Layout>
  );
};

export default IndexPage;
