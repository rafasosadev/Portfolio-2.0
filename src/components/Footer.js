import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Diseñado y desarrollado por Rafael Sosa Linares – Desarrollador Web / Full-Stack</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Rafael Sosa Linares</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/rafasosadev"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/rafaelsosa93/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>

<li className="social-icons">
  <Link
    to="/contact"
    className="icon-colour footer-social-icons"
    style={{ color: "white" }}
  >
    <AiOutlineMail />
  </Link>
</li>

            
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
