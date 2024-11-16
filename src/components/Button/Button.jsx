import React from "react";
import "./button.scss";

function Button({ shape, color, border, textColor, children, ...props }) {
  const shapeClass = shape === "round" ? "bttn-round" : "bttn-square";
  const borderClass = border ? "bttn-border" : "";
  const colorClass = `bttn-${color}`;
  const textColorClass = textColor;

  return (
    <button
      className={`bttn ${shapeClass} ${borderClass} ${colorClass} ${textColorClass}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;


