import React, { useState } from "react";

import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

// bootstrap
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const Header = () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <header>
      <Navbar expand="lg">
        <Container>
          <Link to="/">
            <Navbar.Brand>
              <StaticImage
                src="../images/mediacao-branco.png"
                width={150}
                height={100}
                quality={95}
                alt="A Gatsby astronaut"
                placeholder="blurred"
              />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setShowLinks(!showLinks)}
          >
            {!showLinks ? <AiOutlineMenu /> : <AiOutlineClose />}
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/about">
                Quem somos
              </Nav.Link>
              <Nav.Link as={Link} to="/aba">
                Intervenção ABA Intensiva
              </Nav.Link>
              <Nav.Link as={Link} to="/avaliacao">
                Avaliação
              </Nav.Link>
              <Nav.Link as={Link} to="/carga-horaria">
                Carga Horária
              </Nav.Link>
              <Nav.Link as={Link} to="/acompanhante">
                Acompanhante Domiciliar/Escolar
              </Nav.Link>
              <Nav.Link as={Link} to="/supervisao">
                Supervisão
              </Nav.Link>
              <Nav.Link as={Link} to="/nucleos">
                Núcleos
              </Nav.Link>
              <Nav.Link as={Link} to="/contatos">
                Fale Conosco
              </Nav.Link>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Link>Quem somos</Link>
          <Link>Intervenção ABA Intensiva</Link>
          <Link>Avaliação</Link>
          <Link>Carga Horária</Link>
          <Link>Acompanhante Domiciliar/Escolar</Link>
        </Navbar.Collapse>
      </Container>
    </Navbar> */}
    </header>
  );
};
export default Header;
