import React, { useState } from "react";

export default function IconWrapper({ icon, color, feedbackColor, size, onClick, stroke }) {
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }

  function handleClick() {
    if (onClick) {
      onClick(); 
    }
  }

  const iconColor = isHovered ? feedbackColor : color;

  const wrapperStyle = {
    display: "flex",
    lineHeight: `${size}px`,
    alignItems: "center",
  };

  return (
    <div
      style={wrapperStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {React.cloneElement(icon, {
        color: iconColor,
        size: size,
        stroke: stroke ? stroke : 2
      })}
    </div>
  );
}