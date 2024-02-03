import classes from './CertificationIcon.module.css'
import IconWrapper from "../UI/Icon/IconWrapper";
import CertificateIcon from "../UI/Icon/CertificateIcon";

export default function CertificationIcon() {
    return (
        <div className={classes.certificationIcon}>
        <IconWrapper
          color="#666"
          feedbackColor="#666"
          size={20}
          icon={<CertificateIcon />}
        />
      </div>
    )
}