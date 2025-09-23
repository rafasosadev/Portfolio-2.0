import React from "react";
import preLogo from "../Assets/pre.png"

function Pre(props) {
  return (
    <div id={props.load ? "preloader" : "preloader-none"}>
      <img src={preLogo} alt="Cargando..." className="pre-logo" />
    </div>
  );
}

export default Pre;
