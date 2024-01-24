import classes from './SectionTitle.module.css';

export default function SectionTitle({children}) {
    return (
        <div className={classes.titleContainer}>
            <h2 className={classes.titleBorder}>{children}</h2>
        </div>
    )
}