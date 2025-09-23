import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import calculadora from "../../Assets/Projects/calculadora.PNG";

import SosaCars from "../../Assets/Projects/SosaCars.png";
import chatify from "../../Assets/Projects/chatify.png";

import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Celiacosmy"
              description="Proyecto final DAM: Aplicación móvil en Kotlin con Firebase y Firestore, enfocada en la gestión y compartición de recetas para personas con celiaquía."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
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
            />
          </Col>

{/* PONER MÁS PROYECTOS AQUI ABAJO EJEMPLO:  
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
*/}

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
