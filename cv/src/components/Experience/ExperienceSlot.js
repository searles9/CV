import classes from "./ExperienceSlot.module.css";
import Position from "./Position";
import WorkIcon from "./WorkIcon";
import { v4 as uuidv4 } from "uuid";
import {
  calculateTotalTenure
} from "../../util/dateUtil";

export default function ExperienceSlot({ experienceSlot }) {
  const tenure = calculateTotalTenure(experienceSlot.positions)

  return (
    <div className={classes.container}>
      <div className={classes.icon}>
        <WorkIcon />
      </div>
      <div className={classes.detailsContainer}>
        <div>
          <h3 className={classes.title}>{experienceSlot.company.name}</h3>{" "}
          <p>{tenure}</p>
          <p>
            {`${experienceSlot.company.location.city}`},{" "}
            {`${experienceSlot.company.location.region}`},{" "}
            {`${experienceSlot.company.location.countryCode}`}
          </p>
        </div>

        {experienceSlot.positions.map((position) => (
          <Position
            key={uuidv4()}
            position={position}
          />
        ))}
      </div>
    </div>
  );
}
