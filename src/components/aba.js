import React, { useEffect } from "react";
import { Link } from "gatsby";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { motion } from "framer-motion";

import AOS from "aos";
const Equipe = () => {
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
    <section className="container-aba">
      <Container fluid>
        <Row className="" xs={1} md={2} sm={2}>
          <Col className="mb-4">
            <motion.article
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
            >
              <Link to="/aba">
                <h3>ABA</h3>
                <p>
                  Tem como objetivo implementar comportamentos socialmente
                  relevantes e adequado nas pessoas.
                </p>
              </Link>
            </motion.article>
          </Col>
          <Col className="mb-4">
            <motion.article
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
            >
              <Link to="/avaliacao">
                <h3>Avaliação</h3>
                <p>
                  Envolve a observação da criança nos seus ambientes naturais,
                  além do consultório.
                </p>
              </Link>
            </motion.article>
          </Col>
        </Row>
        <Row xs={1} md={2} sm={2}>
          <Col className="mb-4">
            <motion.article
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
            >
              <Link to="/carga-horaria">
                <h3>carga horária</h3>
                <p>
                  20 horas semanais distribuídas entre os atendimentos dos
                  pacientes (principal e secundário).
                </p>
              </Link>
            </motion.article>
          </Col>
          <Col className="mb-4">
            <motion.article
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
            >
              <Link to="/nucleos">
                <h3>núcleos</h3>
                <p>
                  Trabalho interno que se divide em seis Núcleos para um bom
                  funcionamento interno.
                </p>
              </Link>
            </motion.article>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Equipe;
