import classes from "./ExperienceSlot.module.css";
import Position from "./Position";
import WorkIcon from "./WorkIcon";

export default function ExperienceSlot({ experienceSlot }) {
  return (
    <div className={classes.container}>
      <div className={classes.icon}>
        <WorkIcon />
      </div>
      <div className={classes.detailsContainer}>
        <div>
          <h3 className={classes.title}>{experienceSlot.company.name}</h3>{" "}
          <p>2 yrs 8 mos</p>
          <p>
            {`${experienceSlot.company.location.city}`},{" "}
            {`${experienceSlot.company.location.region}`},{" "}
            {`${experienceSlot.company.location.countryCode}`}
          </p>
        </div>

        {experienceSlot.positions.map((position) => (
          <Position
            key={`${position.startMonth}-${position.startYear}-${position.title}`}
            position={position}
          />
        ))}
      </div>
    </div>
  );
}
