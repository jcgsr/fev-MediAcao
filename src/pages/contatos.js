import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";

import { MdOutlineMailOutline } from "react-icons/md";
import { GrInstagram } from "react-icons/gr";

const Contatos = () => (
  <Layout>
    <Seo title="Fale conosco" />
    <h1 className="animate__animated animate__zoomIn">fale conosco</h1>
    <article className="card-body">
      <h3>
        {" "}
        <MdOutlineMailOutline />
      </h3>
      <p>E-mail para contato da Equipe Mediação:</p>
      <p>
        <a href="mailto:comercial.equipemediacao@gmail.com">
          comercial.equipemediacao@gmail.com
        </a>
      </p>
      <hr />
      <h3>
        <GrInstagram />
      </h3>
      <p>Instagram da Equipe:</p>
      <p>
        <a href="https://www.instagram.com/equipemediacao/"> @equipemediacao</a>
      </p>
    </article>
    {/* <Card>
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
    </Card> */}
  </Layout>
);

export default Contatos;
