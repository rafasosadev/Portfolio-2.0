import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsChevronDoubleDown } from "react-icons/bs";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";


function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hola!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                Soy
                <strong className="main-name"> RAFAEL SOSA LINARES</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
             
            </Col>
          </Row>
        </Container>
      
      </Container>
  
      <Home2 />
      
{/* Icono de flecha para bajar al apartado "about" */}
<div className="scroll-down-icon"
  onClick={() =>
    document.getElementById("about").scrollIntoView({ behavior: "smooth" })}>
<BsChevronDoubleDown size={50} color="#708ef0" />
</div>

    </section>
  );
}

export default Home;
