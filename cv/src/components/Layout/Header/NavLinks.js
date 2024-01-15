import classes from "./NavLinks.module.css";
import { NavLink } from "react-router-dom";
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
      {isMobile && <IconMenu color="#222" hoverColor="#007bff" size={20} />}
      {!isMobile && (
        <ul className={classes.navUl}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              About Me
            </NavLink>
            <NavLink
              to="/resume"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Resume
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Blog
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Contact
            </NavLink>
          </li>
        </ul>
      )}
    </div>
  );
}
