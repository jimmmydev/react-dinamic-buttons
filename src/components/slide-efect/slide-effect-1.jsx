import React from "react";
import "./slide-effect-1.css";

const SlideEffect1 = ({ as, children, filled, secondary, ...rest }) => {
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

SlideEffect1.defaultProps = {
  as: "button",
};

export default SlideEffect1;
