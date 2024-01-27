import classes from "./ExperienceSlot.module.css";
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
          <p>2 yrs 8 mos</p> {/* time at company - calculate*/}
          <p>
            {`${experienceSlot.company.location.city}`},{" "}
            {`${experienceSlot.company.location.region}`},{" "}
            {`${experienceSlot.company.location.countryCode}`}
          </p>
        </div>

        {
          experienceSlot.positions.map((position) => (
            <div 
            key={`${position.startMonth}-${position.startYear}-${position.title}`}
            className={classes.position}>
            <h4 className={classes.title}>{position.title}</h4>{" "}
            <div>
              <p>Mar 2022 - Present * 8mos</p>
              <p>{position.employmentType} * {position.locationType}</p>
            </div>
            <div>{/* summary and highlights */}</div>
            <div>
              <button>see details</button> {/* see details * see less */}
            </div>
          </div>
          ))
        }
      </div>
    </div>
  );
}
