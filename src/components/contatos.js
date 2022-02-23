import React, { useEffect } from "react";
import { Link } from "gatsby";

import { MdOutlineMailOutline } from "react-icons/md";
import { GrInstagram } from "react-icons/gr";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import AOS from "aos";
const Contatos = () => {
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
    <section className="container-contatos">
      <Container fluid>
        <Link to="contatos">
          <h1 className="mb-4">Nossos Contatos</h1>
        </Link>
        <Row className="mb-4" xs={1} md={2} sm={2}>
          <Col className="mb-4">
            <div>
              <p>
                <a href="mailto:suporte.equipemediacao@gmail.com">
                  <MdOutlineMailOutline />
                </a>
              </p>
            </div>
          </Col>
          <Col>
            <div>
              <p>
                <a href="https://www.instagram.com/equipemediacao/">
                  <GrInstagram />
                </a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contatos;
