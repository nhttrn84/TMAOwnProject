import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
        </Route>
        <Redirect to="/login" />
      </Switch>
    </Router>
  );
}