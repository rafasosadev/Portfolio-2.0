import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { 
  DiJavascript1, DiReact, DiPython, DiJava, DiNodejs 
} from "react-icons/di";
import { 
  SiPostgresql, SiKotlin, SiCsharp, SiHtml5, SiCss3, SiTailwindcss,
  SiAndroidstudio, SiFirebase, SiJetpackcompose, SiGoogleanalytics, SiNextdotjs, SiStripe, SiVercel
} from "react-icons/si";

function ProjectCards(props) {

  // Función para mapear nombres a iconos
const renderTechIcon = (tech) => {
  switch (tech.toLowerCase()) {
    case "java": return <DiJava size={25} color="#f89820" />;
    case "csharp": return <SiCsharp size={25} color="#68217a" />;
    case "python": return <DiPython size={25} color="#306998" />;
    case "postgresql": return <SiPostgresql size={25} color="#336791" />;
    case "html5": return <SiHtml5 size={25} color="#E34F26" />;
    case "css3": return <SiCss3 size={25} color="#1572B6" />;
    case "javascript": return <DiJavascript1 size={25} color="#F7DF1E" />;
    case "kotlin": return <SiKotlin size={25} color="#A97BFF" />;
    case "react": return <DiReact size={25} color="#61DBFB" />;
    case "tailwind": return <SiTailwindcss size={25} color="#38B2AC" />;
    case "nodejs": return <DiNodejs size={25} color="#339933" />;
    case "android studio": return <SiAndroidstudio size={25} color="#3DDC84" />;
    case "firebase": return <SiFirebase size={25} color="#FFCA28" />;
    case "jetpack compose": return <SiJetpackcompose size={25} color="#4285F4" />;
    case "google analytics": return <SiGoogleanalytics size={25} color="#EA4335" />;
    case "next.js": return <SiNextdotjs size={25} color="#000000" />;
    case "stripe": return <SiStripe size={25} color="#635bff" />;
    case "vercel": return <SiVercel size={25} color="#000000" />;
    default: return null;
  }
};


  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body className="d-flex flex-column justify-content-between">
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {/* Iconos de lenguajes/frameworks */}
        {props.languages && (
          <div
            className="project-languages"
            style={{
              marginBottom: "15px",
              display: "flex",
              gap: "10px",
              justifyContent: "center",
            }}
          >
            {props.languages.map((tech, index) => (
              <OverlayTrigger
                key={index}
                placement="top"
                overlay={<Tooltip id={`tooltip-${tech}`}>{tech}</Tooltip>}
              >
                <div style={{ cursor: "pointer" }}>{renderTechIcon(tech)}</div>
              </OverlayTrigger>
            ))}
          </div>
        )}

        {/* Botones */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
