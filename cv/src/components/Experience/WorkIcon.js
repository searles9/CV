import IconWrapper from "../UI/Icon/IconWrapper";
import TechIcon from "../UI/Icon/TechIcon"
import classes from "./WorkIcon.module.css";

export default function WorkIcon() {
  return (
    <div className={classes.workIcon}>
      <IconWrapper
        color="#666"
        feedbackColor="#666"
        size={20}
        icon={<TechIcon />}
      />
    </div>
  );
}
