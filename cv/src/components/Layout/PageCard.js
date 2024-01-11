import MainNavigation from "./MainNavigation";
import Footer from "./Footer";
import classes from "./PageCard.module.css";

export default function PageCard({ children }) {
  return (
      <div className={classes.pageContainer}>
        <div className={classes.pageCard}>
          <MainNavigation />
          <main>
            {children}
          </main>
          <Footer />
        </div>
      </div>
  );
}

// max width: 1320px
// border radius: 40px
// overflow: hidden
// margin: 3% auto
// padding: 40px 70px 60px
// box-shadow: 0 0 40px -10px rgba(0,0,0,.2);
