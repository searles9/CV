import { useState } from "react";
import { resume } from "../../resume/resume";
import { v4 as uuidv4 } from "uuid";
import ExperienceSlot from "./ExperienceSlot";
import SeeMoreButton from "../UI/Button/SeeMoreButton";
import classes from './NonRelevantExperience.module.css'

const workExperience = resume.work;

export default function NonRelevantExperience() {
  const [isExpanded, setIsExpanded] = useState(false);

  function toggleExpanded() {
    setIsExpanded(!isExpanded);
  }

  return (
    <div>
      {isExpanded && (
        <div className={classes.experienceContainer}>
          {workExperience.map(
            (experienceSlot) =>
              !experienceSlot.isRelevantExperience && (
                <ExperienceSlot
                  key={uuidv4()}
                  experienceSlot={experienceSlot}
                />
              )
          )}
        </div>
      )}
      <SeeMoreButton
        expanded={isExpanded}
        toggleExpanded={toggleExpanded}
        expandedText="See Less"
        collapsedText="Show Early Career Experience"
        borderless={true}
      />
    </div>
  );
}
