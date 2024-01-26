import classes from './Skill.module.css';

export default function Skill({skill}) {
    return (
        <p className={classes.skill}>{skill.name}</p>
    )
}