import React from "react";
import "../style.css"; 

function UniversalButton({ label, variant = "light", onClick, disabled }) {
  return (
    <button
      className={`universal-button ${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}

export default UniversalButton;
