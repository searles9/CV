import classes from './SkillNode.module.css';

export default function Skill({skillName}) {
    return (
            <p className={classes.skill}>{skillName}</p>
    )
}