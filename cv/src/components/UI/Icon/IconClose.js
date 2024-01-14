import React, { useState } from "react";
import { IconX } from "@tabler/icons-react";

export default function MenuButton({ color, hoverColor, size }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const iconColor = isHovered ? hoverColor : color;

  return (
    <IconX
      color={iconColor}
      size={size}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
}

// <IconClose color="#222" hoverColor="#007bff" size={23}/>