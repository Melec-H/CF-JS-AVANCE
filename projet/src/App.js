import React from 'react';
import {MovieDetailView} from "./Views/MovieDetailView";
import {MoviesView} from "./Views/MoviesView";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function App() {

  function logItem(item) {
    console.log("===>", item)
  }
  return (
      <div>
        <Router>
            <Route
                path="/"
                exact
                component={MoviesView}
            />
            <Route
                path="/movies/:movieId"
                exact
                component={MovieDetailView}
            />
        </Router>
      </div>
  );
}

export default App;
