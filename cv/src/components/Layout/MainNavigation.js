import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import MenuButton from "../UI/MenuButton";
import { useState, useEffect } from "react";

export default function MainNavigation() {
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
    <header>
      <nav className={classes.nav}>
        <div>
          <NavLink to="/" end className={classes.navLink}>
            <div className={classes.navLogoNameContainer}>
              <div className={classes.navLogo}>
                <p>D</p>
              </div>
              <div className={classes.navName}>
                <p className={classes.navFirstName}>
                  Donovan <span className={classes.navLastName}>Searles</span>
                </p>
              </div>
            </div>
          </NavLink>
        </div>
        {isMobile && <MenuButton color="#222" hoverColor="#007bff" size={28} />}
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
      </nav>
    </header>
  );
}

// NOTES FOR LATER
// nav title: 20px
// nav txt: 14px
// Header 50 tall
// Header 32 px tall
