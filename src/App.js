import React, { useState } from "react";
import "./App.css";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Score from "./pages/Score";

import Register from "./pages/Register";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [username, setName] = useState(localStorage.getItem("customer"));
  const handleLogout = () => {
    localStorage.removeItem("customer");
    setName(null);
  };
  let loggedin = (email) => {
    setName(email);
    console.log(email);
    localStorage.setItem("customer", email);
  };
  return (
    <HashRouter>
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login">
          <Login loggedin={loggedin} />
        </Route>
        <PrivateRoute path="/quiz">
          <Quiz />
        </PrivateRoute>
        <Route path="/score" component={Score} />
        <Route exact path="/">
          <Homepage username={username} handleLogout={handleLogout} />
        </Route>
      </Switch>
    </HashRouter>
  );
}

let PrivateRoute = ({ children, ...rest }) => {
  let customer = localStorage.getItem("customer");
  return (
    <Route
      {...rest}
      render={({ location }) =>
        customer ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default App;
