import { useState } from "react";
import classes from "./Position.module.css";
import { v4 as uuidv4 } from "uuid";
import SeeMoreButton from "../UI/Button/SeeMoreButton";

export default function Position({ position }) {
  const [isExpanded, setIsExpanded] = useState(false);

  function toggleExpanded() {
    setIsExpanded(!isExpanded);
  }

  const spanNode =  "\u2022";

  return (
    <div className={classes.position}>
      <h4 className={classes.title}>{position.title}</h4>{" "}
      <div>
        <p>Mar 2022 - Present {spanNode} 2 yrs 8mos</p>
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
