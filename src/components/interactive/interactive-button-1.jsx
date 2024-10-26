import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCheck } from "@fortawesome/free-solid-svg-icons";
import "./interactive-button-1.css";

const InteractiveButton1 = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => setIsSuccess(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess]);

  return (
    <a
      className={`button ${isSuccess ? "success" : ""}`}
      href="#"
      role="button"
      onClick={handleClick}
    >
      <span>borrar</span>
      <div className="icon">
        <FontAwesomeIcon icon={faXmark} className="fa-remove" />
        <FontAwesomeIcon icon={faCheck} className="fa-check" />
      </div>
    </a>
  );
};

export default InteractiveButton1;
