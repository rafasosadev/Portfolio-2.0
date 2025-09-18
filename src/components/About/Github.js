import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row, Col } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <Col xs={12} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h1 className="project-heading" style={{ paddingBottom: "20px", textAlign: "center" }}>
          Días <strong className="purple">codeando</strong>
        </h1>
        <GitHubCalendar
          username="S0umyajit"
          blockSize={15}
          blockMargin={5}
          color="#708ef0"
          fontSize={16}
          transformData={(data) =>
            data.filter((day) => {
              const year = new Date(day.date).getFullYear();
              return year === new Date().getFullYear(); // solo este año
            })
          }
        />
      </Col>
    </Row>
  );
}

export default Github;
