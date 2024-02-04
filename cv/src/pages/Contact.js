import PageTitle from "../components/PageTitle/PageTitle";
import StaticMap from "../components/StaticMap/StaticMap";
import ContactDetails from "../components/ContactDetails/ContactDetails";

export default function Contact() {
  return (
    <div>
      <PageTitle title="Contact"/>
      <StaticMap title="Located in Atlanta, GA"/>
      <ContactDetails />
    </div>
  );
}
