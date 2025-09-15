import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Técnico Superior en DAM",
          "Desarrollador Web & Full-Stack",
          "Experiencia con PHP, MySQL, React, Node.js, Java, Spring Boot, Angular",
          "Apasionado por aprender y crecer como Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 40,
        delay: 40, // velocidad de escritura
      }}
    />
  );
}

export default Type;
