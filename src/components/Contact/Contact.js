import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineSend } from "react-icons/ai";
import Globe from "react-globe.gl";
import Particle from "../Particle";

const FORM_ENDPOINT = "https://formspree.io/f/manwnqgk"; // <- Cambia aquí si tu endpoint es otro

function Contact() {
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);
  const globeRef = useRef();

  useEffect(() => {
    if (globeRef.current) {
      const controls = globeRef.current.controls();
      if (controls) {
        controls.autoRotate = true;
        controls.autoRotateSpeed = 2;
        controls.enableZoom = false;
        controls.enableRotate = true;
      }
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    setSending(true);

    try {
      const form = e.target;
      const action = form.getAttribute("action") || FORM_ENDPOINT;
      const method = (form.getAttribute("method") || "POST").toUpperCase();
      const data = new FormData(form);

      const response = await fetch(action, {
        method,
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        form.reset();
        setStatus("✅ Mensaje enviado correctamente. Me pondré en contacto contigo a la mayor brevedad posible.");
      } else {
        let errText = "❌ Hubo un error al enviar el mensaje. Inténtalo más tarde.";
        try {
          const errorJson = await response.json();
          if (errorJson && errorJson.error) errText = `❌ ${errorJson.error}`;
        } catch (err) {
          // ignore
        }
        setStatus(errText);
        console.error("Form submit error:", response.status, response.statusText);
      }
    } catch (err) {
      console.error("Network or unexpected error:", err);
      setStatus("❌ No se ha podido enviar el mensaje (error de red). Comprueba la consola y tu conexión.");
    } finally {
      setSending(false);
      // Limpiar el mensaje automáticamente después de 5 segundos
      setTimeout(() => setStatus(""), 6000);
    }
  };

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
      <Particle />
      <Container style={{ position: "relative", zIndex: 2 }}>
        <Row className="justify-content-center w-100 align-items-center" style={{ minHeight: "80vh" }}>
          {/* Formulario */}
          <Col md={6}>
            <h1 className="text-center mb-4" style={{ fontSize: "3em", fontWeight: "700" }}>
              📩 <span style={purpleStyle}>CONTÁCTAME</span>
            </h1>
            <p className="text-center text-light mb-5" style={{ fontSize: "1.3em" }}>
              Estoy abierto a <b style={purpleStyle}>oportunidades laborales</b> y colaboraciones.
              Si tu <b style={purpleStyle}>empresa</b> busca un <b style={purpleStyle}>desarrollador web / full-stack</b>,
              envíame un mensaje y me pondré en contacto contigo.
            </p>

            <form
              action={FORM_ENDPOINT}
              method="POST"
              onSubmit={handleSubmit}
              className="d-flex flex-column gap-4"
            >
              <input type="text" name="name" placeholder="Nombre" required className="form-control form-control-lg" />
              <input type="email" name="email" placeholder="Correo Electrónico" required className="form-control form-control-lg" />
              <textarea name="message" rows="8" placeholder="Escribe tu mensaje..." required className="form-control form-control-lg"></textarea>

              <button
                type="submit"
                className="btn btn-primary btn-lg d-flex align-items-center justify-content-center gap-2"
                disabled={sending}
              >
                {sending ? "Enviando..." : "Enviar Mensaje"} <AiOutlineSend />
              </button>
            </form>

            {status && (
              <p className="mt-4 text-center" style={{ fontSize: "1.05em" }}>
                {status}
              </p>
            )}
          </Col>

          {/* Globo + info */}
          <Col
            md={6}
            className="d-flex flex-column align-items-center justify-content-center text-center"
            style={{ marginTop: "40px" }}
          >
            <div style={{ width: "100%", maxWidth: "400px", height: "400px", marginBottom: "20px" }}>
              <Globe
                ref={globeRef}
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                backgroundColor="rgba(0,0,0,0)"
                height={400}
                width={400}
                animateIn={true}
              />
            </div>

            <div
              style={{
                color: "white",
                fontSize: "1.1em",
                marginTop: "20px",
                background: "rgba(255,255,255,0.05)",
                padding: "15px 20px",
                borderRadius: "10px",
                boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
              }}
            >
              <p>📧 rafasl1993@gmail.com</p>
              <p>📞 +34 685 461 706</p>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
