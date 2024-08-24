import React, { useState } from "react";
import ReactiveButton from "reactive-button";

function ReactiveButton3() {
  const [stateTiny, setStateTiny] = useState("idle");
  const [stateSmall, setStateSmall] = useState("idle");
  const [stateMedium, setStateMedium] = useState("idle");
  const [stateLarge, setStateLarge] = useState("idle");

  const onClickHandler = (setState) => {
    setState("loading");
    setTimeout(() => {
      setState("success");
    }, 2000);
  };

  return (
    <div>
      <h4>Botones de Diferentes Tamaños</h4>
      <ReactiveButton
        size="tiny"
        buttonState={stateTiny}
        idleText="Tiny"
        loadingText="Loading"
        successText="Done"
        onClick={() => onClickHandler(setStateTiny)}
      />
      &nbsp;&nbsp;&nbsp;
      <ReactiveButton
        size="small"
        buttonState={stateSmall}
        idleText="Small"
        loadingText="Loading"
        successText="Done"
        onClick={() => onClickHandler(setStateSmall)}
      />
      &nbsp;&nbsp;&nbsp;
      <ReactiveButton
        size="medium"
        buttonState={stateMedium}
        idleText="Medium"
        loadingText="Loading"
        successText="Done"
        onClick={() => onClickHandler(setStateMedium)}
      />
      &nbsp;&nbsp;&nbsp;
      <ReactiveButton
        size="large"
        buttonState={stateLarge}
        idleText="Large"
        loadingText="Loading"
        successText="Done"
        onClick={() => onClickHandler(setStateLarge)}
      />
    </div>
  );
}

export default ReactiveButton3;
