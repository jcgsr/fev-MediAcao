import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

import Card from "react-bootstrap/Card";

import { MdOutlineMailOutline } from "react-icons/md";
import { GrInstagram } from "react-icons/gr";

const Contatos = () => (
  <Layout>
    <Seo title="Fale conosco" />
    <h1>fale conosco</h1>
    <Card>
      <Card.Body>
        <Card.Title>
          <MdOutlineMailOutline />
        </Card.Title>

        <Card.Text>
          E-mail para contato da Equipe Mediação:
          <p>
            <a href="mailto:suporte.equipemediacao@gmail.com">
              suporte.equipemediacao@gmail.com
            </a>
          </p>
        </Card.Text>
        <hr />
        <Card.Title>
          <GrInstagram />
        </Card.Title>
        <Card.Text>
          Instagram da Equipe:
          <p>
            <a href="https://www.instagram.com/equipemediacao/">
              {" "}
              @equipemediacao
            </a>
          </p>
        </Card.Text>
      </Card.Body>
    </Card>
  </Layout>
);

export default Contatos;
