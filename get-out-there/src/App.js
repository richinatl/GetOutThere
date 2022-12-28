import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FavoritesContextProvider } from "./store/favorites-context";
import AllMeetupsPage from "./pages/AllMeetups";
import NewEventPage from "./pages/NewEvent";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div>
      <Router>
        <Layout>
          <FavoritesContextProvider>
            <Routes>
              <Route path="/" element={<AllMeetupsPage />}></Route>
              <Route path="/new-event" element={<NewEventPage />}></Route>
              <Route path="/favorites" element={<FavoritesPage />}></Route>
            </Routes>
          </FavoritesContextProvider>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
