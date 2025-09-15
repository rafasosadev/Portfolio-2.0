import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// PDF local para visualización
import pdf from "../../Assets/Curriculum_Rafael_Sosa_Linares.pdf";

// Worker de PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// Link de Google Drive para descarga
const googleDriveLink = "https://drive.google.com/uc?export=download&id=1eIYUZs2wS9oZElPWuC5FOextYNqDcQuN";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        {/* Botón de descarga arriba */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={googleDriveLink}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        {/* Visualizador del PDF */}
        <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        {/* Botón de descarga abajo */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={googleDriveLink}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
