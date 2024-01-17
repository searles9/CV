import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import classes from "./Footer.module.css";

const DUMMY_LINKS = [
  {
    name: "GitHub",
    link: "https://github.com/searles9",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/donovansearles/",
  },
  {
    name: "Blog",
    link: "https://blog.dsearles.com/",
  },
];

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.links}>
        <ul>
          {DUMMY_LINKS.map((link) => (
            <li key={uuidv4()}>
              <Link to={link.link} target="_blank">
                {link.name}
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
