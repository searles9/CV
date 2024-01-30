import { useState } from "react";
import classes from "./Position.module.css";
import { v4 as uuidv4 } from "uuid";
import SeeMoreButton from "../UI/Button/SeeMoreButton";
import {
  getCurrentDate,
  getShortMonthName,
  calculateDateDifference,
  formatYearsMonths,
} from "../../util/dateUtil";

export default function Position({ position }) {
  const isCurrent =
    position.tenure.hasOwnProperty("isCurrentPosition") &&
    position.tenure.isCurrentPosition === true;

  const [isExpanded, setIsExpanded] = useState(isCurrent ? true : false);

  let endDate;
  const startDate = {
    year: position.tenure.startYear,
    month: position.tenure.startMonth,
  };

  if (isCurrent) {
    endDate = getCurrentDate();
  } else {
    endDate = {
      year: position.tenure.endYear,
      month: position.tenure.endMonth,
    };
  }

  const dateDifference = calculateDateDifference(startDate, endDate);
  const tenure = formatYearsMonths(dateDifference.years, dateDifference.months);

  function toggleExpanded() {
    setIsExpanded(!isExpanded);
  }

  const spanNode = "\u2022";

  return (
    <div className={classes.position}>
      <h4 className={classes.title}>{position.title}</h4>
      <div>
        <p>
          {getShortMonthName(startDate.month)} {startDate.year} -{" "}
          {isCurrent
            ? "Present"
            : `${getShortMonthName(endDate.month)} ${endDate.year}`}{" "}
          {spanNode} {tenure}
        </p>
        <p>
          {position.employmentType} {spanNode} {position.locationType}
        </p>
      </div>
      {isExpanded && (
        <div className={classes.positionDetails}>
          <p>{position.summary}</p>
          <ul className={classes.highlights}>
            {position.highlights.map((highlight) => (
              <li key={uuidv4()}>{highlight}</li>
            ))}
          </ul>
        </div>
      )}
      <div className={classes.buttonContainer}>
        <SeeMoreButton
          expanded={isExpanded}
          toggleExpanded={toggleExpanded}
          expandedText="See Less"
          collapsedText="See Details"
          borderless={false}
        />
      </div>
    </div>
  );
}
