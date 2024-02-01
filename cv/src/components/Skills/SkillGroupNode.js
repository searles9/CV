import classes from './SkillGroupNode.module.css';

export default function Skill({skillGroupName}) {
    return (
            <p className={classes.skillGroupNode}>{skillGroupName}</p>
    )
}