import FactCard from "./FactCard";
import classes from "./Facts.module.css";
import IconWrapper from "../UI/Icon/IconWrapper";
import AgeIcon from "../UI/Icon/AgeIcon";
import TechIcon from "../UI/Icon/TechIcon";
import ActiveCertificationIcon from "../UI/Icon/ActiveCertificationIcon";
import ExpiredCertificationIcon from "../UI/Icon/ExpiredCertificationIcon";
import { 
    yearsOld,
    yearsInTech,
    ActiveCertifications,
    ExpiredCertifications
} from "../../resume/resumeFacts";

export default function Facts() {
  const yearsOldResult = yearsOld();
  const yearsInTechResult = yearsInTech();
  const activeCertificationsResult = ActiveCertifications();
  const expiredCertificationsResult = ExpiredCertifications();
  const iconSize = 45;

  return (
    <div className={classes.factsContainer}>
      <FactCard
        iconComponent={
          <IconWrapper
            color="#007bff"
            feedbackColor="#007bff"
            size={iconSize}
            icon={<AgeIcon />}
          />
        }
        title="Years Old"
        factValue={yearsOldResult}
      ></FactCard>
      <FactCard
        iconComponent={
          <IconWrapper
            color="#007bff"
            feedbackColor="#007bff"
            size={iconSize}
            icon={<TechIcon />}
          />
        }
        title="Years in Tech"
        factValue={yearsInTechResult}
      ></FactCard>
      <FactCard
        iconComponent={
          <IconWrapper
            color="#007bff"
            feedbackColor="#007bff"
            size={iconSize}
            icon={<ActiveCertificationIcon />}
          />
        }
        title="Active Certifications"
        factValue={activeCertificationsResult}
      ></FactCard>
      <FactCard
        iconComponent={
          <IconWrapper
            color="#007bff"
            feedbackColor="#007bff"
            size={iconSize}
            icon={<ExpiredCertificationIcon />}
          />
        }
        title="Expired Certifications"
        factValue={expiredCertificationsResult}
      ></FactCard>
    </div>
  );
}
