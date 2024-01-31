import IconWrapper from "../UI/Icon/IconWrapper";
import TechIcon from "../UI/Icon/TechIcon"
import classes from "./EducationIcon.module.css";

export default function EducationIcon() {
  return (
    <div className={classes.educationIcon}>
      <IconWrapper
        color="#666"
        feedbackColor="#666"
        size={20}
        icon={<TechIcon />}
      />
    </div>
  );
}
