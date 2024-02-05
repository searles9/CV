import classes from "./ContactDetails.module.css";
import PhoneIcon from "../UI/Icon/PhoneIcon";
import LocationIcon from "../UI/Icon/LocationIcon";
import EmailIcon from "../UI/Icon/EmailIcon";
import LinkedInIcon from "../UI/Icon/LinkedInIcon";
import GitHubIcon from "../UI/Icon/GitHubIcon";
import BlogIcon from "../UI/Icon/BlogIcon";
import ContactItem from "./ContactItem";
import { resume } from "../../resume/resume";

// Email
const resumeEmail = resume.basics.email;
const emailParts = resumeEmail.split("@");
const email = `${emailParts[0]}+${resume.basics.emailAlias}@${emailParts[1]}`;

// Phone Number
const phone = `${resume.basics.phone.countryCode} (${resume.basics.phone.areaCode}) ${resume.basics.phone.localNumber}`;

// Location
const location = `${resume.basics.location.city} ${resume.basics.location.state}, ${resume.basics.location.countryCode}`

export default function ContactDetails() {
  return (
    <div className={classes.container}>
      <div className={classes.links}>
        <div className={`${classes.basics} ${classes.flexList}`}>
          <ContactItem icon={<EmailIcon />} title={email} />
          <ContactItem icon={<PhoneIcon />} title={phone} />
          <ContactItem icon={<LocationIcon />} title={location} />
        </div>
        <div className={`${classes.profiles} ${classes.flexList}`}>
          <ContactItem
            icon={<LinkedInIcon />}
            title="LinkedIn"
            isLink={true}
            linkTo={resume.profiles["LinkedIn"].link}
          />
          <ContactItem
            icon={<GitHubIcon />}
            title="GitHub"
            isLink={true}
            linkTo={resume.profiles["GitHub"].link}
          />
          <ContactItem
            icon={<BlogIcon />}
            title="Blog"
            isLink={true}
            linkTo={resume.profiles["Blog"].link}
          />
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
