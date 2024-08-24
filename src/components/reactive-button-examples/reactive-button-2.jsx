import React, { useState } from "react";
import ReactiveButton from "reactive-button";

function ReactiveButton2() {
  const [statePrimary, setStatePrimary] = useState("idle");
  const [stateSecondary, setStateSecondary] = useState("idle");
  const [stateGreen, setStateGreen] = useState("idle");
  const [stateRed, setStateRed] = useState("idle");
  const [stateBlue, setStateBlue] = useState("idle");
  const [stateYellow, setStateYellow] = useState("idle");

  const onClickHandler = (setState) => {
    setState("loading");
    setTimeout(() => {
      setState("success");
    }, 2000);
  };

  return (
    <div>
      <h4>Botones de Colores</h4>
      <ReactiveButton
        color="primary"
        buttonState={statePrimary}
        idleText="Primary"
        loadingText="Loading"
        successText="Done"
        onClick={() => onClickHandler(setStatePrimary)}
      />
      &nbsp;&nbsp;&nbsp;
      <ReactiveButton
        color="secondary"
        buttonState={stateSecondary}
        idleText="Secondary"
        loadingText="Loading"
        successText="Done"
        onClick={() => onClickHandler(setStateSecondary)}
      />
      &nbsp;&nbsp;&nbsp;
      <ReactiveButton
        color="green"
        buttonState={stateGreen}
        idleText="Green"
        loadingText="Loading"
        successText="Done"
        onClick={() => onClickHandler(setStateGreen)}
      />
      &nbsp;&nbsp;&nbsp;
      <ReactiveButton
        color="red"
        buttonState={stateRed}
        idleText="Red"
        loadingText="Loading"
        successText="Done"
        onClick={() => onClickHandler(setStateRed)}
      />
      &nbsp;&nbsp;&nbsp;
      <ReactiveButton
        color="blue"
        buttonState={stateBlue}
        idleText="Blue"
        loadingText="Loading"
        successText="Done"
        onClick={() => onClickHandler(setStateBlue)}
      />
      &nbsp;&nbsp;&nbsp;
      <ReactiveButton
        color="yellow"
        buttonState={stateYellow}
        idleText="Yellow"
        loadingText="Loading"
        successText="Done"
        onClick={() => onClickHandler(setStateYellow)}
      />
    </div>
  );
}

export default ReactiveButton2;
