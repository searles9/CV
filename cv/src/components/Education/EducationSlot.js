import classes from "./EducationSlot.module.css";
import EducationIcon from "./EducationIcon";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import SeeMoreButton from "../UI/Button/SeeMoreButton";

export default function EducationSlot({ educationSlot }) {
  const [isExpanded, setIsExpanded] = useState(false);

  function toggleExpanded() {
    setIsExpanded(!isExpanded);
  }

  const spanNode = "\u2022";

  return (
    <div className={classes.container}>
      <div className={classes.icon}>
        <EducationIcon />
      </div>
      <div className={classes.detailsContainer}>
        <h3 className={classes.title}>{educationSlot.institution.name}</h3>
        <p>
          {educationSlot.degree && `${educationSlot.degree} ${spanNode} `}
          {educationSlot.fieldOfStudy}
        </p>
        <p>
          {educationSlot.enrollmentPeriod.startYear} -{" "}
          {educationSlot.enrollmentPeriod.endYear}
        </p>
        {educationSlot.courses.length > 0 && (
          <div className={classes.education}>
            {isExpanded && (
              <div>
                <p>Courses:</p>
                <ul>
                  {educationSlot.courses.map((course) => (
                    <li key={uuidv4()}>{course}</li>
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
        )}
      </div>
    </div>
  );
}
