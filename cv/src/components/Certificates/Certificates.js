import Certification from "./Certification";
import SeeMoreButton from "../UI/Button/SeeMoreButton";
import classes from "./Certificates.module.css";
import React from "react";
import { resume } from "../../resume/resume";
import { useState } from "react";

const certificates = resume.certificates;

export default function Certificates() {
  const [isExpanded, setIsExpanded] = useState(false);

  function toggleExpanded() {
    setIsExpanded(!isExpanded);
  }
  return (
    <div>
      <div className={classes.certificatesContainer}>
        {certificates.length >= 1 && (
          <Certification certification={certificates[0]} />
        )}
        {certificates.length >= 2 && (
          <Certification certification={certificates[1]} />
        )}

        {isExpanded && certificates.length > 2 && (
        // Start iterating from the third certificate (index 2) to the end
        <React.Fragment>
          {certificates.slice(2).map((certification, index) => (
            <Certification key={index} certification={certification} />
          ))}
        </React.Fragment>
      )}
      </div>
      {certificates.length > 2 && (
        <div className={classes.buttonContainer}>
          <SeeMoreButton
            expanded={isExpanded}
            toggleExpanded={toggleExpanded}
            expandedText="See Less"
            collapsedText={`See All ${certificates.length} Certifications`}
            borderless={true}
          />
        </div>
      )}
    </div>
  );
}
