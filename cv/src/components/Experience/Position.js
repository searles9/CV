import { useState } from "react";
import classes from "./Position.module.css";
import { v4 as uuidv4 } from "uuid";
import SeeMoreButton from "../UI/Button/SeeMoreButton";
import { getShortMonthName, calculateTotalTenure } from "../../util/dateUtil";

export default function Position({ position }) {
  const isCurrent =
    position.tenure.hasOwnProperty("isCurrentPosition") &&
    position.tenure.isCurrentPosition === true;

  const [isExpanded, setIsExpanded] = useState(isCurrent ? true : false);

  const tenure = calculateTotalTenure([position]);

  function toggleExpanded() {
    setIsExpanded(!isExpanded);
  }

  const spanNode = "\u2022";

  const positionTypeAndSpan = `${position.employmentType} ${spanNode}`

  return (
    <div className={classes.position}>
      <h4 className={classes.title}>{position.title}</h4>
      <div className={classes.positionSubTitles}>
        <p>
          {getShortMonthName(position.tenure.startMonth)}{" "}
          {position.tenure.startYear} -{" "}
          {isCurrent
            ? "Present"
            : `${getShortMonthName(position.tenure.endMonth)} ${
                position.tenure.endYear
              }`}{" "}
          {spanNode} {tenure}
        </p>
        <p>
          {position.employmentType && positionTypeAndSpan} {position.locationType}
        </p>
      </div>
      {isExpanded && (
        <div className={classes.positionDetails}>
          {position.summary && <p>{position.summary}</p>}
          {position.highlights.length > 0 && (
            <ul className={classes.highlights}>
              {position.highlights.map((highlight) => (
                <li key={uuidv4()}>{highlight}</li>
              ))}
            </ul>
          )}
        </div>
      )}
      {(position.summary || position.highlights.length > 0) && (
        <div className={classes.buttonContainer}>
          <SeeMoreButton
            expanded={isExpanded}
            toggleExpanded={toggleExpanded}
            expandedText="See Less"
            collapsedText="See Details"
            borderless={isExpanded ? true : false}
          />
        </div>
      )}
    </div>
  );
}
