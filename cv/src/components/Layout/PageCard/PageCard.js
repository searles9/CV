import Header from "../Header/Header";
import classes from "./PageCard.module.css";

export default function PageCard({children}) {
    return (
        <div className={classes.pageContainer}>
            <div className={classes.pageCard}>
                <Header />
                <h1>Placeholder</h1>
                <h1>Placeholder</h1>
                <h1>Placeholder</h1>
                <h1>Placeholder</h1>
                <h1>Placeholder</h1>
                <h1>Placeholder</h1>
                <h1>Placeholder</h1>
                {/* page content - store children */}
                {/* footer */}
            </div>
        </div>
    )
}