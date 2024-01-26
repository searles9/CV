import classes from "./SectionTitle.module.css";

export default function SectionTitle({ children, topMargin = true, bottomMargin = true }) {
  return (
    <div
      className={`${classes.titleContainer} ${
        topMargin ? classes.topMargin : ""
      } ${bottomMargin ? classes.bottomMargin : ""}`}
    >
      <h2 className={classes.titleBorder}>{children}</h2>
    </div>
  );
}
