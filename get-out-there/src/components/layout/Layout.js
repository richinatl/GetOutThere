import MainNavigation from "./MainNavigation.js";
import classes from "./Layout.module.css";
import Banner from "./Banner";

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <Banner />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
