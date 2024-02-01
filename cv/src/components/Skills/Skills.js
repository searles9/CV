import { v4 as uuidv4 } from 'uuid';
import { resume } from '../../resume/resume'
import SkillGroup from './SkillGroup';
import classes from './Skills.module.css';

export default function Skills() {
    const skills = resume.skills;

    return (
        <div className={classes.skillGroupsContainer}>
            {skills.map((skillGroup) => (
                <SkillGroup key={uuidv4()} skillGroup={skillGroup}/>
            ))}
        </div>
    )
}