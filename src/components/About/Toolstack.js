import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiFirebase,
  SiAndroidstudio,
  SiJetpackcompose,
  SiGoogleanalytics,
  SiGithub,
  SiVercel
} from "react-icons/si";
import { DiGit } from "react-icons/di";

function Toolstack() {
  const tools = [
    { icon: <SiAndroidstudio />, name: "Android Studio" },
    { icon: <SiJetpackcompose />, name: "Jetpack Compose" },
    { icon: <SiFirebase />, name: "Firebase" },
    { icon: <SiGoogleanalytics />, name: "Google Analytics" },
    { icon: <DiGit />, name: "Git" },
    { icon: <SiGithub />, name: "GitHub" },
    { icon: <SiVercel />, name: "Vercel" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          <div className="icon-hover">{tool.icon}</div>
          <div className="text-hover">{tool.name}</div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
