import { v4 as uuidv4 } from 'uuid';
import classes from './SkillGroup.module.css';
import Skill from './SkillNode';
import SkillGroupNode from './SkillGroupNode';

export default function SkillGroup({skillGroup}) {
    return (
        <div className={classes.skillsContainer}>
            <SkillGroupNode skillGroupName={skillGroup.skillGroupName}/>
            {skillGroup.skills.map((skill) => (
                <Skill skillName={skill.name} />
            ))}
        </div>
    )
}