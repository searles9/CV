import classes from "./ContactDetails.module.css";
import PhoneIcon from "../UI/Icon/PhoneIcon";
import LocationIcon from "../UI/Icon/LocationIcon";
import EmailIcon from "../UI/Icon/EmailIcon";
import LinkedInIcon from "../UI/Icon/LinkedInIcon";
import GitHubIcon from "../UI/Icon/GitHubIcon";
import BlogIcon from "../UI/Icon/BlogIcon";
import ContactItem from "./ContactItem";

export default function ContactDetails() {
  return (
    <div className={classes.container}>
      <div className={classes.links}>
        <div className={`${classes.basics} ${classes.flexList}`}>
          <ContactItem
            icon={<EmailIcon />}
            title="donovansearles+cv@gmail.com"
          />
          <ContactItem icon={<PhoneIcon />} title="+1 (706) 510-8996" />
          <ContactItem icon={<LocationIcon />} title="Atlanta GA, US" />
        </div>
        <div className={`${classes.profiles} ${classes.flexList}`}>
          <ContactItem icon={<LinkedInIcon />} title="LinkedIn" />
          <ContactItem icon={<GitHubIcon />} title="GitHub" />
          <ContactItem icon={<BlogIcon />} title="Blog" />
        </div>
      </div>
      <div className={classes.text}>
        <p>
          Feel free to get in touch with me! I'm just a message away, whether
          you want to discuss potential opportunities, ask questions, or just
          have a friendly chat. Don't hesitate to reach out via email, phone, or
          any of my social media links. I look forward to hearing from you!
        </p>
      </div>
    </div>
  );
}
