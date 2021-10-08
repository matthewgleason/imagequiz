import React from "react";
import "./App.css";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Score from "./pages/Score";

import Register from "./pages/Register";
import { HashRouter, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/quiz" component={Quiz} />
        <Route path="/score" component={Score} />
        <Route exact path="/" component={Homepage} />
      </Switch>
    </HashRouter>
  );
}

export default App;
