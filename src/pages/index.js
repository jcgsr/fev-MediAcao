// 15.02.2022
// Chegamos ontem de viagem do Rio. Eu com bastante catarro, ouvidos entupidos, moco moco, Susi amolecendo e Diana tb.

import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";

import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import "aos/dist/aos.css";
import AOS from "aos";

import { Container } from "react-bootstrap";
AOS.init();

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Container>
      <h1 data-aos="zoom-in">Home page</h1>
    </Container>
  </Layout>
);

export default IndexPage;
