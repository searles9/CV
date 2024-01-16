import React, { useState } from "react";

export default function IconWrapper({ icon, color, feedbackColor, size, onClick }) {
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
    display: "inline-block",
    lineHeight: `${size}px`,
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
      })}
    </div>
  );
}