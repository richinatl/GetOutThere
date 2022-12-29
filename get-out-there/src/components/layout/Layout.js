import MainNavigation from "./MainNavigation.js";
import classes from "./Layout.module.css";
import Banner from "./Banner";
import Footer from "./Footer";

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <Banner />
      <main className={classes.main}>{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
