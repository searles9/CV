import classes from "./ExperienceSlot.module.css";
import WorkIcon from "./WorkIcon";

export default function ExperienceSlot({ experienceSlot }) {
  return (
    <div className={classes.container}>
      <div>
        <WorkIcon />
      </div>
      <div className={classes.detailsContainer}>
        <div>
          <h4 className={classes.title}>Cox Automotive</h4>
          <p>2 yrs 8 mos</p>
          <p>Atlanta, Georgia, US</p>
        </div>
        <div>
          <div>
            <h4 className={classes.title}>Software Engineer I</h4>
            <p>Mar 2022 - Present * 8mos</p>
            <p>Full-time * Remote</p>
          </div>
          <div>
            <button>see details</button>
          </div>
        </div>
        <div>
          <div>
            <h4 className={classes.title}>AWS Support Engineer</h4>
            <p>Mar 2022 - Dec 2022 * 8mos</p>
            <p>Contract * Remote</p>
          </div>
          <div>
            <button>see details</button>
          </div>
        </div>
      </div>
      {/* add position details - map */}
    </div>
  );
}
