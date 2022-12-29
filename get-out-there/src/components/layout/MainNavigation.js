import { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import FavoritesContext from "../../store/favorites-context";

function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.title}>Get Out There</div>
      <nav className={classes.nav__container}>
        <ul className={classes.header__ul}>
          <li className={classes.nav__li}>
            <Link to="/">All Meetups</Link>
          </li>
          <li className={classes.nav__li}>
            <Link to="/new-event">Add an event</Link>
          </li>
          <li className={classes.nav__li}>
            <Link to="/favorites">
              I'm There!
              <span className={classes.badge}>
                {" "}
                {favoritesCtx.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
