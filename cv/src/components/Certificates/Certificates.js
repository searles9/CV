import Certification from './Certification'
import classes from "./Certificates.module.css"


export default function Certificates() {
    return (
        <div className={classes.certificatesContainer}>
            {/* RENDER FIRST TWO */}
            <Certification />
            <Certification />
            {/* IF CERTS LIST IS LONGER THAN 3 RENDER THE REST */}
            <Certification />
            <Certification />
            <Certification />
        </div>
    )
}