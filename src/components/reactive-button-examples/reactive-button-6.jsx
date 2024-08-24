import React, { useState } from "react";
import ReactiveButton from "reactive-button";

function ReactiveButton6() {
  const [state, setState] = useState("idle");

  const onClickHandler = () => {
    setState("loading");
    setTimeout(() => {
      setState("success");
    }, 2000);
  };

  return (
    <div>
      <h3>Botón como Enlace</h3>
      <a href="https://github.com/" target="_blank" rel="noreferrer">
        <ReactiveButton
          buttonState={state}
          idleText="Visitar Github"
          loadingText="Loading"
          successText="Done"
          onClick={onClickHandler}
        />
      </a>
    </div>
  );
}

export default ReactiveButton6;
