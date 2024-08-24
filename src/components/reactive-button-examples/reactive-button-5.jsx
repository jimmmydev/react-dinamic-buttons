import React, { useState } from "react";
import ReactiveButton from "reactive-button";
import { FaReply } from "react-icons/fa";

function ReactiveButton5() {
  const [state, setState] = useState("idle");

  const onClickHandler = () => {
    setState("loading");
    setTimeout(() => {
      setState("success");
    }, 2000);
  };

  return (
    <div>
      <h3>Botón con Icono</h3>
      <ReactiveButton
        buttonState={state}
        idleText={
          <span>
            <FaReply /> Send
          </span>
        }
        loadingText="Loading"
        successText="Done"
        onClick={onClickHandler}
      />
    </div>
  );
}

export default ReactiveButton5;
