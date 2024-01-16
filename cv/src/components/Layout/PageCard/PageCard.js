import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import PageContent from "../PageContent/PageContent";
import classes from "./PageCard.module.css";

export default function PageCard({ children }) {
  return (
    <div className={classes.pageCard}>
      <Header />
      <PageContent>{children}</PageContent>
      <Footer />
    </div>
  );
}
