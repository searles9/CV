import React, { useState } from 'react';
import { IconMenu2 } from '@tabler/icons-react';

export default function MenuButton({color, hoverColor, size}) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
  
    const iconColor = isHovered ? hoverColor : color;

    return (
        <IconMenu2 color={iconColor} size={size} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
      );
}