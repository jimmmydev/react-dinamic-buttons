import React, { useState } from "react";
import ReactiveButton from "reactive-button";
import "./reactive-button-1";
function ReactiveButton1() {
  const [state, setState] = useState("idle");

  const handleClick = () => {
    setState("loading");
    setTimeout(() => {
      const isSuccess = Math.random() > 0.5;
      setState(isSuccess ? "success" : "error");
    }, 2000);
  };

  return (
    <div className="reactive-button-container">
      <ReactiveButton
        buttonState={state}
        onClick={handleClick}
        color="primary"
        idleText="Submit"
        loadingText="Submitting..."
        successText="Success!"
        errorText="Error!"
        size="large"
        className="custom-button"
      />
    </div>
  );
}

export default ReactiveButton1;
