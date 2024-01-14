import classes from "./NavLinks.module.css";
import { useState, useEffect } from "react";
import IconMenu from "../../UI/Icon/IconMenu";

export default function NavLinks() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991);
    };

    // Initial check on mount
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={classes.navLinksContainer}>
      <IconMenu color="#222" hoverColor="#007bff" size={23}/>
    </div>
  );
}
