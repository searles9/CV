import { resume } from "../../resume/resume";
import classes from "./Education.module.css";
import EducationSlot from "./EducationSlot";
import { v4 as uuidv4 } from "uuid";

const education = resume.education;

export default function Education() {
  return (
    <div>
      {
        <div className={classes.container}>
          {education.map((educationSlot) => (
            <EducationSlot educationSlot={educationSlot} key={uuidv4()} />
          ))}
        </div>
      }
    </div>
  );
}
