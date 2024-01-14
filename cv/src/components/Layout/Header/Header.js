import classes from "./Header.module.css";
import LogoName from "./LogoName";
import NavLinks from "./NavLinks";

export default function Header() {
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <LogoName />
        <NavLinks />
      </nav>
    </header>
  );
}
