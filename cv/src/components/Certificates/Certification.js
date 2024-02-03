import classes from "./Certification.module.css";
import CertificationIcon from "./CertificationIcon";

export default function Certification() {
  return (
    <div className={classes.certification}>
      <div className={classes.icon}>
        <CertificationIcon />
      </div>
      <div className={classes.certDetails}>
        <h3 className={classes.title}>Certification Title Name</h3>
        <p>Amazon Web Services (AWS)</p>
        <p>Dec 2023 - Mar 2024</p>
        <div className={classes.statusContainer}>
        <p className={`${classes.status} ${classes.active}`}>Active</p>
        </div>
      </div>
    </div>
  );
}
