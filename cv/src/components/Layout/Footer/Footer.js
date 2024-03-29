import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import classes from "./Footer.module.css";
import { resume } from "../../../resume/resume";

const profiles = resume.profiles;

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.links}>
        <ul>
          {Object.keys(profiles).map((profile) => (
            <li key={uuidv4()}>
              <Link to={profiles[profile].link} target="_blank">
                {profiles[profile].name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={classes.footerText}>
        <Link to="/">Donovan Searles CV</Link>
      </div>
    </footer>
  );
}

//  media query on max width 760px
