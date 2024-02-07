import profileImage from "../../assets/profilePhotos/profile1075.png";
import classes from "./AboutMeHeader.module.css";
import { resume } from "../../resume/resume";

export default function AboutMeHeader() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
      <div>
          <img
            className={classes.profileImage}
            src={profileImage}
            alt="Donovan Searles"
          />
        </div>
        <div className={classes.content}>
          <h4 className={classes.labelText}>{resume.basics.label}</h4>
          <h1 className={classes.nameText}>{resume.basics.name}</h1>
          <p className={classes.summaryText}>{resume.basics.summary}</p>
        </div>
      </div>
    </div>
  );
}
