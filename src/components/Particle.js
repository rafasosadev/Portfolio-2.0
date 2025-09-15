import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        particles: {
          number: {
            value: 120,
            density: { enable: true, value_area: 1500 },
          },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: {
            value: 0.8,
            random: true,
            anim: { enable: true, speed: 1, opacity_min: 0.2 },
          },
          size: { value: 2, random: true },
          move: {
            enable: true,
            speed: 0.2,
            direction: "none",
            random: true,
            out_mode: "out",
          },
          line_linked: { enable: false },
        },
        interactivity: {
          events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { particles_nb: 4 },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
