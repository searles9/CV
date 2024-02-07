import classes from "./Certification.module.css";
import CertificationIcon from "./CertificationIcon";
import { getShortMonthName, certificationIsActive } from "../../util/dateUtil";
import { Link } from 'react-router-dom'

export default function Certification({ certification }) {
  const expires = certification.expiryDate.expires;
  const isActive = certificationIsActive(certification);

  return (
    <div className={classes.certification}>
      <div className={classes.icon}>
        <CertificationIcon />
      </div>
      <div className={classes.certDetails}>
        <Link to={certification.url} target="_blank" className={classes.link}><h3 className={classes.title}>{certification.name}</h3></Link>
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
