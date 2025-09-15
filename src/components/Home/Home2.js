import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              PERMÍTEME <span className="purple"> PRESENTARME </span>
            </h1>
            <p className="home-about-body">
              Soy <b className="purple">Rafael Sosa Linares</b>, Técnico Superior en{" "}
              <b className="purple">Desarrollo de Aplicaciones Multiplataforma (DAM)</b>, 
              con experiencia en aplicaciones móviles, web y de escritorio.
              <br />
              <br />
              Durante mis prácticas en <b className="purple">Sagatech</b> trabajé en proyectos 
              con <b className="purple">WordPress, PHP, MySQL, HTML, CSS y JavaScript</b>, 
              adquiriendo experiencia en personalización, mantenimiento y mejora de funcionalidades.
              <br />
              <br />
              Actualmente sigo ampliando mis conocimientos en{" "}
              <b className="purple">Java (Spring Boot), Angular, React, Node.js </b> 
              y bases de datos relacionales y no relacionales como{" "}
              <b className="purple">MySQL y MongoDB</b>.
              <br />
              <br />
              Mi objetivo es crecer como <b className="purple">desarrollador web / full-stack</b>, 
              aplicando lo aprendido en proyectos reales y seguir evolucionando 
              dentro de un entorno profesional que me permita aportar valor.
            </p>
          </Col>
          <Col md={4} className="myAvtar" style={{ paddingLeft: "70px" }}>
  <Tilt>
    <img src={myImg} className="img-fluid" alt="avatar" />
  </Tilt>
</Col>

        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>ENCUÉNTRAME EN</h1>
            <p>
              Puedes <span className="purple">conectar</span> conmigo en:
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/rafasosadev"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/rafaelsosa93/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
<li className="social-icons">
  <Link
    to="/contact"
    className="icon-colour home-social-icons btn-icon"
    style={{
      background: "none",
      border: "none",
      padding: 0,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
    }}
    aria-label="Ir a contacto"
  >
    <AiOutlineMail />
  </Link>
</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
