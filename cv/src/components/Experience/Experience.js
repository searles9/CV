import { resume } from "../../resume/resume";
import ExperienceSlot from "./ExperienceSlot";
import { v4 as uuidv4 } from 'uuid';

const workExperience = resume.work;

export default function Experience() {
  return (
    <div>
      {workExperience.map((experienceSlot) => (
        <ExperienceSlot key={uuidv4()} experienceSlot={experienceSlot}/>
      ))}
    </div>
  );
}
