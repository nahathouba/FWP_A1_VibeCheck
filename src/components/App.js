import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Signin from "./Signin";
import MyProfile from "./MyProfile";
import Forum from "./Forum";
import { getUser, removeUser } from "../data/repository";
import Signup from "./Signup";


function App() {
  const [username, setUsername] = useState(getUser());

  const signinUser = (username) => {
    setUsername(username);
  }

  const signoutUser = () => {
    removeUser();
    setUsername(null);
  }

  return (
    <div className="d-flex flex-column min-vh-100">
      <Router>
        <Navbar username={username} signoutUser={signoutUser} />
        <main role="main">
          <div className="container my-4">
            <Switch>
              <Route path="/signin" render={props => (
                <Signin {...props} signinUser={signinUser} />
              )} />
              <Route path="/signup" render={props => (
                <Signup {...props} />
              )} />
              <Route path="/profile">
                <MyProfile />
              </Route>
              <Route path="/forum">
                <Forum username={username} />
              </Route>
              <Route path="/">
                <Home username={username} />
              </Route>
            </Switch>
          </div>
        </main>
        <Footer />
      </Router>
    </div>

  );
}

export default App;
