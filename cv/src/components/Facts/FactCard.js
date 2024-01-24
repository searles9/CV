import classes from './FactCard.module.css'

export default function FactCard({iconComponent, title, factValue}) {
    return (
        <div className={classes.card}>
            {iconComponent}
            <h4>{title}</h4>
            <h1>{factValue}</h1>
        </div>
    )
}