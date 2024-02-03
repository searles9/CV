import classes from "./Certification.module.css";
import CertificationIcon from "./CertificationIcon";
import { getShortMonthName, certificationIsActive } from "../../util/dateUtil";

export default function Certification({ certification }) {
  const expires = certification.expiryDate.expires;
  const isActive = certificationIsActive(certification);

  return (
    <div className={classes.certification}>
      <div className={classes.icon}>
        <CertificationIcon />
      </div>
      <div className={classes.certDetails}>
        <h3 className={classes.title}>{certification.name}</h3>
        <p>{certification.issuer}</p>
        <p>
          {`${getShortMonthName(certification.issueDate.issueMonth)} ${
            certification.issueDate.issueYear
          }`}
          {expires &&
            ` - ${getShortMonthName(certification.expiryDate.expiryMonth)} ${
              certification.expiryDate.expiryYear
            }`}
        </p>
        <div className={classes.statusContainer}>
          <p
            className={`${classes.status} ${
              isActive ? classes.active : classes.expired
            }`}
          >
            {isActive ? "Active" : "Expired"}
          </p>
        </div>
      </div>
    </div>
  );
}
