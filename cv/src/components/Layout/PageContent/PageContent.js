import classes from "./PageContent.module.css"

export default function PageContent ({children}) {
    return (
        <main className={classes.pageContent}>
            {children}
        </main>
    )
}