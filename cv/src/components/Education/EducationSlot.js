import classes from "./EducationSlot.module.css";
import EducationIcon from "./EducationIcon";

export default function EducationSlot({ educationSlot }) {
  const spanNode = "\u2022";

  return (
    <div className={classes.container}>
      <div className={classes.icon}>
        <EducationIcon />
      </div>
      <div className={classes.detailsContainer}>
        <h3>{educationSlot.institution.name}</h3>
        <p>
          {educationSlot.degree && `${educationSlot.degree} ${spanNode} `}
          {educationSlot.fieldOfStudy}
        </p>
        <p>{educationSlot.enrollmentPeriod.startYear} - {educationSlot.enrollmentPeriod.endYear}</p>
        {/* see more details */}
      </div>
    </div>
  );
}
