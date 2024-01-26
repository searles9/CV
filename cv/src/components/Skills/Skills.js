import classes from './Skills.module.css';
import Skill from './Skill'
import { resume } from '../../resume/resume'

export default function Skills() {
    const skills = resume.skills;

    return (
        <div className={classes.skillsContainer}>
            {skills.map(skill => (
                <Skill skill={skill}/>
            ))}    
        </div>
    )
}