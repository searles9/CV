import classes from "./PageTitle.module.css";

export default function PageTitle({title}) {
    return (
      <div className={classes.pageTitle}>
        <h1>{title}</h1>
      </div>
    );
  }
  