import React from "react";
import "./slide-efect-1.css";

const SlideEfect = ({ as, children, filled, secondary, ...rest }) => {
  const that = {
    as,
  };
  return (
    <div className="slide-efect">
      <that.as className="dir-control" {...rest}>
        {children}
        <span />
        <span />
        <span />
        <span />
        <b aria-hidden="true">{children}</b>
        <b aria-hidden="true">{children}</b>
        <b aria-hidden="true">{children}</b>
        <b aria-hidden="true">{children}</b>
      </that.as>
    </div>
  );
};

SlideEfect.defaultProps = {
  as: "button",
};

export default SlideEfect;
