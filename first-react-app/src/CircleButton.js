import React from "react";

const CircleButton = ({ id, label, disabled, onClick }) => {
  return (
    <button id={id} className="btn" onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

export default CircleButton;
