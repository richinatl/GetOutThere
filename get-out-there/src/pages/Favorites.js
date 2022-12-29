import { useContext } from "react";
import classes from "./Favorites.module.css";

import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);

  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = (
      <p className={classes.p__content}>
        You don't any plans yet, get out there!
      </p>
    );
  } else {
    content = <MeetupList meetups={favoritesCtx.favorites} />;
  }

  return (
    <section>
      <h1 className={classes.h1__favorites}>I want to get to these</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
