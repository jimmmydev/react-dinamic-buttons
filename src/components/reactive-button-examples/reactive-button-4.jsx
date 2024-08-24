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
      <h4>Botones con Estilos</h4>
      <ReactiveButton
        outline
        buttonState={stateOutline}
        idleText="Outline"
        loadingText="Loading"
        successText="Done"
        onClick={() => onClickHandler(setStateOutline)}
      />
      &nbsp;&nbsp;&nbsp;
      <ReactiveButton
        rounded
        buttonState={stateRounded}
        idleText="Rounded"
        loadingText="Loading"
        successText="Done"
        onClick={() => onClickHandler(setStateRounded)}
      />
      &nbsp;&nbsp;&nbsp;
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
