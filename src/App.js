import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Components
import Home from "./components/pages/Home";
import Movie from "./components/pages/movie/Movie";
import Favourite from "./components/pages/favourite/Favourite";
import User from "./components/pages/user/User";
import Navigation from "./components/elements/navigation/Navigation";
import Search from "./components/pages/search/Search";
import Shows from "./components/pages/shows/Shows";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/movie/:id" component={Movie} />
          <Route exact path="/favourites" component={Favourite} />
          <Route exact path="/settings" component={User} />
          <Route exact path="/search/movies/:query" component={Search} />
          <Route exact path="/shows/:id" component={Shows} />
        </Switch>
        <Navigation />
      </Router>
    </div>
  );
}

export default App;
