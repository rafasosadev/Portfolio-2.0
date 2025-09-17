import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
  username="rafasosadev"
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

    </Row>
  );
}

export default Github;
