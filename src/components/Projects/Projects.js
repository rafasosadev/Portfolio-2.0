import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import calculadora from "../../Assets/Projects/calculadora.PNG";

import SosaCars from "../../Assets/Projects/SosaCars.png";

import celiacosmy from "../../Assets/Projects/celiacosmy.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mis Proyectos <strong className="purple">Recientes </strong>
        </h1>
        <p style={{ color: "white" }}>
          Aquí algunos de los proyectos en los que he trabajado recientemente.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={celiacosmy}
              isBlog={false}
              title="Celiacosmy"
              description="Proyecto final DAM: Aplicación móvil en Kotlin con Firebase y Firestore, enfocada en la gestión y compartición de recetas para personas con celiaquía."
              ghLink="https://github.com/rafasosadev/Celiacosmy"
              demoLink="https://github.com/rafasosadev/Celiacosmy"
              languages={["android studio","kotlin", "firebase",  'jetpack compose', 'google analytics']}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SosaCars}
              isBlog={false}
              title="SosaCars"
              description="Aplicación Web de Alquiler de Coches desarrollada con Next.js, React, Tailwind CSS y Stripe. Permite búsqueda de coches, reservas en línea, panel de administración y pasarela de pago segura."
              ghLink="https://github.com/rafasosadev/SosaCars"
              demoLink="https://sosa-cars.vercel.app/"    
              languages={['react','next.js','tailwind', 'stripe', 'vercel']}          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calculadora}
              isBlog={false}
              title="Calculadora Interactiva"
              description="Calculadora interactiva desarrollada en HTML, CSS y JavaScript. Permite realizar operaciones básicas y muestra los valores anteriores y actuales en pantalla. Perfecta para aprender manipulación del DOM y eventos en JS."
              ghLink="https://github.com/rafasosadev/calculadoraSosa"
              demoLink="https://calculadora-sosa.vercel.app/"
              languages={['html5','css3', 'javascript', 'vercel']}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
