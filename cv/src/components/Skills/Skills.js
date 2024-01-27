import { v4 as uuidv4 } from 'uuid';
import classes from './Skills.module.css';
import Skill from './Skill'
import { resume } from '../../resume/resume'

export default function Skills() {
    const skills = resume.skills;

    return (
        <div className={classes.skillsContainer}>
            {skills.map(skill => (
                <Skill key={uuidv4()} skill={skill}/>
            ))}    
        </div>
    )
}