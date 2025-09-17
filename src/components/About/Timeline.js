import React from "react";
import { Row, Col } from "react-bootstrap";

function Timeline() {
  return (
    <section className="timeline-section">
      <h2 className="section-title">Currículum</h2>
      <Row className="timeline-row">
        {/* Educación */}
        <Col md={6} className="timeline-col left-col">
          <h3>Educación</h3>
          <div className="timeline-item">
            <h4>Desarrollo Aplicaciones Multiplataforma [DAM]</h4>
            <span className="purple">Ilerna FP</span>
            <span className="date">2023 - 2025</span>
            <ul style={{ textAlign: "left", paddingLeft: "20px" }}>
             <li> Formación en diseño, desarrollo y mantenimiento de aplicaciones para móviles, web y escritorio. Donde  Java, Kotlin, Swift, C#, JavaScript y bases de datos SQL/NoSQL.</li>
            </ul>
            <div className="connector">
              <div className="circle"></div>
            </div>
          </div>
         
        </Col>

        {/* Experiencia */}
        <Col md={6} className="timeline-col right-col">
          <h3>Experiencia</h3>
          <div className="timeline-item">
            <h4>Desarrollador Web (Prácticas)</h4>
            <span className="purple">Sagatech</span>
            <span className="date">2025</span>
          <ul style={{ textAlign: "left", paddingLeft: "20px" }}>
    <li>Desarrollo y mantenimiento de sitios web con <b style={{ color: "#708ef0" }}>WordPress</b></li>
    <li>Personalización de temas y configuración de plugins según los requerimientos del cliente</li>
    <li>Implementación de nuevas funcionalidades con <b style={{ color: "#708ef0" }}>PHP, HTML, CSS y JavaScript</b></li>
    <li>Optimización de la usabilidad y experiencia de usuario en proyectos web</li>
    <li>Gestión de bases de datos con <b style={{ color: "#708ef0" }}>MySQL</b> para almacenar y estructurar la información</li>
    <li>Uso de <b style={{ color: "#708ef0" }}>Git</b> para control de versiones y trabajo en equipo</li>
    <li>Colaboración en la resolución de incidencias técnicas y soporte en proyectos en curso</li>
  </ul>
            <div className="connector">
              <div className="circle"></div>
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
}

export default Timeline;
