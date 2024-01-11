import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

export default function MainNavigation() {
  return (
    <header>
      <nav className={classes.nav}>
        <div className={classes.navFirstName}>
            <p>Donovan <span className={classes.navLastName}>Searles</span></p>
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
