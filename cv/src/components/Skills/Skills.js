import { v4 as uuidv4 } from "uuid";
import { resume } from "../../resume/resume";
import SkillNode from "./SkillNode";
import SkillGroupNode from "./SkillGroupNode";
import classes from "./Skills.module.css";
import SeeMoreButton from "../UI/Button/SeeMoreButton";
import { useState, useEffect } from "react";
import React from "react";

export default function Skills() {
  const skills = resume.skills;
  const [isMobile, setIsMobile] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);

  useEffect(() => {
    function handleResize() {
      const windowIsMobile = window.innerWidth <= 576; // 768
      setIsMobile(windowIsMobile);
      if (windowIsMobile) {
        setIsExpanded(false);
      } else {
        setIsExpanded(true);
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function toggleExpanded() {
    setIsExpanded(!isExpanded);
  }

  return (
    <div>
      {isExpanded && (
        <div className={`${classes.skillsContainer} ${isMobile ? classes.mobilePadding : classes.standardPadding}`}>
          {skills.map((skillGroup, index) => (
            <React.Fragment key={uuidv4()}>
              <SkillGroupNode skillGroupName={skillGroup.skillGroupName} />
              {skillGroup.skills.map((skill) => (
                <SkillNode key={uuidv4()} skillName={skill.name} />
              ))}
            </React.Fragment>
          ))}
        </div>
      )}
      {isMobile && (
        <div className={isExpanded ? classes.buttonContainer : null}>
          <SeeMoreButton
            expanded={isExpanded}
            toggleExpanded={toggleExpanded}
            expandedText="See Less"
            collapsedText="View Skills"
            borderless={isExpanded ? true : false}
          />
        </div>
      )}
    </div>
  );
}
