import React from "react";
import { Col, Row } from "react-bootstrap";
import { 
  DiJavascript1, 
  DiReact, 
  DiPython, 
  DiJava, 
  DiNodejs 
} from "react-icons/di";
import { 
  SiPostgresql, 
  SiKotlin, 
  SiCsharp, 
  SiHtml5, 
  SiCss3, 
  SiTailwindcss
} from "react-icons/si";

function Techstack() {
  const techs = [
  
    
    { icon: <DiJava />, name: "Java" },
    { icon: <SiCsharp />, name: "C Sharp" },
    { icon: <DiPython />, name: "Python" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
    { icon: <SiHtml5 />, name: "HTML5" },
    { icon: <SiCss3 />, name: "CSS3" },
    { icon: <DiJavascript1 />, name: "JavaScript" },
    { icon: <SiKotlin />, name: "Kotlin" },
    { icon: <DiReact />, name: "React" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <DiNodejs />, name: "Node.js" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techs.map((tech, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index} style={{ position: "relative" }}>
          <div className="icon-hover">{tech.icon}</div>
          <div className="text-hover">{tech.name}</div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
