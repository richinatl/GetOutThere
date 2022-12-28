import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewEventPage from "./pages/NewEvent";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <AllMeetupsPage />
          </Route>
          <Route path="/new-event">
            <NewEventPage />
          </Route>
          <Route path="/favorites">
            <FavoritesPage />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
