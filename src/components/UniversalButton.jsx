import React from "react";
import "../style.css";

function UniversalButton({ 
  label, 
  variant = "light", 
  onClick, 
  disabled, 
  customClass = "", 
  isFlexible = false 
}) {
  const buttonClass = isFlexible
    ? `flexible-button ${variant}`
    : `universal-button ${variant}`;

  return (
    <button
      className={`${buttonClass} ${customClass}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}

export default UniversalButton;
