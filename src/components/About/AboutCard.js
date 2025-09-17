import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            ¡Hola a todos! <br></br> 
            Soy <span style={{ color: "#708ef0" }}>Rafael Sosa Linares</span>, 
            Técnico Superior en <span style={{ color: "#708ef0" }}>Desarrollo de Aplicaciones Multiplataforma (DAM)</span>.
            <br />
            Actualmente estoy buscando oportunidades para crecer como <span style={{ color: "#708ef0" }}>desarrollador web / full-stack</span>.
            <br />
            Durante mis prácticas en <span style={{ color: "#708ef0" }}>Sagatech</span>, adquirí experiencia en desarrollo y mantenimiento de sitios web con tecnologías como <span style={{ color: "#708ef0" }}>WordPress, PHP, HTML, CSS y JavaScript</span>.
            <br />
            <br />
            Además de programar, algunas otras actividades que disfruto son:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Ver y practicar fútbol
            </li>
            <li className="about-activity">
              <ImPointRight /> Senderismo
            </li>
            <li className="about-activity">
              <ImPointRight /> Ver películas y series
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
