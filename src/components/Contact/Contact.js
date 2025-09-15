import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineSend } from "react-icons/ai";
import Particle from "../Particle"; // tu componente de partículas

function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      form.reset();
      setStatus(
        "✅ Mensaje enviado correctamente. Me pondré en contacto contigo a la mayor brevedad posible. ¡Gracias por contactarme!"
      );
    } else {
      setStatus("❌ Hubo un error al enviar el mensaje. Inténtalo más tarde.");
    }
  };

  // color inline para las palabras clave
  const purpleStyle = { color: "#708ef0", fontWeight: "bold" };

  return (
    <Container
      fluid
      className="home-about-section contact-section d-flex align-items-center justify-content-center"
      id="contacto"
      style={{
        position: "relative",
        minHeight: "108vh",
        paddingTop: "10px",
        paddingBottom: "100px",
      }}
    >
      <Particle /> {/* Partículas de fondo */}
      <Container style={{ position: "relative", zIndex: 2 }}>
        <Row className="justify-content-center w-100 align-items-center" style={{ minHeight: "80vh" }}>
          <Col md={8} lg={6}>
            <h1 className="text-center mb-4" style={{ fontSize: "3em", fontWeight: "700" }}>
              📩 <span style={purpleStyle}>CONTÁCTAME</span>
            </h1>
            <p className="text-center text-light mb-5" style={{ fontSize: "1.3em" }}>
              Estoy abierto a <b style={purpleStyle}>oportunidades laborales</b> y colaboraciones. 
              Si tu <b style={purpleStyle}>empresa</b> busca un <b style={purpleStyle}>desarrollador web / full-stack</b>, 
              envíame un mensaje y me pondré en contacto contigo a la mayor brevedad posible.
            </p>
            <form onSubmit={handleSubmit} className="d-flex flex-column gap-4">
              <input type="text" name="name" placeholder="Tu Nombre" required className="form-control form-control-lg" />
              <input type="email" name="email" placeholder="Tu Correo Electrónico" required className="form-control form-control-lg" />
              <textarea name="message" rows="8" placeholder="Escribe tu mensaje..." required className="form-control form-control-lg"></textarea>
              <button
                type="submit"
                className="btn btn-primary btn-lg d-flex align-items-center justify-content-center gap-2"
              >
                Enviar Mensaje <AiOutlineSend />
              </button>
            </form>
            {status && <p className="mt-4 text-center" style={{ fontSize: "1.1em" }}>{status}</p>}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
