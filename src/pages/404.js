import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";

import { Link } from "gatsby";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Erro" />
    <h1>404: Essa página não existe...</h1>
    <Container>
      <p style={{ textAlign: "center", margin: "0 auto" }}>
        <Link to="/">
          <Button variant="primary">Início</Button>
        </Link>
      </p>
    </Container>
  </Layout>
);

export default NotFoundPage;
