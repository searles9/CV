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
  const mobileScreenWidth = 576;
  const initalWindowWidthIsMobile = window.innerWidth <= mobileScreenWidth;
  const [isMobile, setIsMobile] = useState(initalWindowWidthIsMobile);
  const [isExpanded, setIsExpanded] = useState(initalWindowWidthIsMobile ? false : true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      const currentWidth = window.innerWidth;
      const windowIsMobile = currentWidth <= mobileScreenWidth;
      if (windowWidth !== currentWidth) {
        setWindowWidth(currentWidth);
        setIsMobile(windowIsMobile);
        if (windowIsMobile) {
          setIsExpanded(false);
        } else {
          setIsExpanded(true);
        }
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  function toggleExpanded() {
    setIsExpanded(!isExpanded);
  }

  return (
    <div>
      {isExpanded && (
        <div
          className={`${classes.skillsContainer} ${
            isMobile ? classes.mobilePadding : classes.standardPadding
          }`}
        >
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
