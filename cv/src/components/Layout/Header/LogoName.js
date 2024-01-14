import { NavLink } from "react-router-dom";
import classes from "./LogoName.module.css";

export default function LogoName() {
  return (
    <div>
      <NavLink to="/" end className={classes.navLink}>
        <div className={classes.container}>
          <div className={classes.logo}>
            <p>D</p>
          </div>
          <div className={classes.name}>
            <p className={classes.firstName}>
              Donovan <span className={classes.lastName}>Searles</span>
            </p>
          </div>
        </div>
      </NavLink>
    </div>
  );
}
