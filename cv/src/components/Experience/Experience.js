import { resume } from "../../resume/resume";
import ExperienceSlot from "./ExperienceSlot";
import { v4 as uuidv4 } from "uuid";
import NonRelevantExperience from "./NonRelevantExperience";
import classes from "./Experience.module.css";

const workExperience = resume.work;

export default function Experience() {
  return (
    <div>
      {
        <div className={classes.container}>
          {workExperience.map(
            (experienceSlot) =>
              experienceSlot.isRelevantExperience && (
                <ExperienceSlot
                  key={uuidv4()}
                  experienceSlot={experienceSlot}
                />
              )
          )}
        </div>
      }

      <NonRelevantExperience />
    </div>
  );
}
