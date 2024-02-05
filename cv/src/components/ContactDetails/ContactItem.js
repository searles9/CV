import IconWrapper from "../UI/Icon/IconWrapper";
import classes from "./ContactItem.module.css";
import { Link } from "react-router-dom";

export default function ContactItem({ icon, title, isLink = false, linkTo }) {
  return (
    // top div is flex container
    <div className={classes.itemContainer}>
      <div className={classes.iconContainer}>
        <IconWrapper
          color="#007ced"
          feedbackColor="#007ced"
          size={38} // 2.5rem
          icon={icon}
          stroke={2}
        />
      </div>
      <div className={classes.textContainer}>
        {!isLink && <h4 className={classes.title}>{title}</h4>}
        {isLink && (
          <Link to={linkTo ? linkTo : ""} target="_blank">
            {title}
          </Link>
        )}
      </div>
    </div>
  );
}
