import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
//  28px
export default function MainNavigation() {
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
      </nav>
    </header>
  );
}

// NOTES FOR LATER
// nav title: 20px
// nav txt: 14px
// Header 50 tall
// Header 32 px tall
