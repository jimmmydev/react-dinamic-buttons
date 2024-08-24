import React, { useState } from "react";
import ReactiveButton from "reactive-button";

function ReactiveButton4() {
  const [stateOutline, setStateOutline] = useState("idle");
  const [stateRounded, setStateRounded] = useState("idle");
  const [stateShadow, setStateShadow] = useState("idle");

  const onClickHandler = (setState) => {
    setState("loading");
    setTimeout(() => {
      setState("success");
    }, 2000);
  };

  return (
    <div>
      <h3>Botones con Estilos</h3>
      <ReactiveButton
        outline
        buttonState={stateOutline}
        idleText="Outline"
        loadingText="Loading"
        successText="Done"
        onClick={() => onClickHandler(setStateOutline)}
      />
      <ReactiveButton
        rounded
        buttonState={stateRounded}
        idleText="Rounded"
        loadingText="Loading"
        successText="Done"
        onClick={() => onClickHandler(setStateRounded)}
      />
      <ReactiveButton
        shadow
        buttonState={stateShadow}
        idleText="Shadow"
        loadingText="Loading"
        successText="Done"
        onClick={() => onClickHandler(setStateShadow)}
      />
    </div>
  );
}

export default ReactiveButton4;
