import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Login from "./Login";
import MyProfile from "./MyProfile";
import Forum from "./Forum";
import { getUser, removeUser } from "../data/repository";


function App() {
  const [username, setUsername] = useState(getUser());

  const loginUser = (username) => {
    setUsername(username);
  }

  const logoutUser = () => {
    removeUser();
    setUsername(null);
  }
  
  return (
    <div className="d-flex flex-column min-vh-100">
    <Router>
      <Navbar username={username} logoutUser={logoutUser} />
      <main role="main">
        <div className="container my-3">
          <Switch>
            <Route path="/login" render={props => (
              <Login {...props} loginUser={loginUser} />
            )} />
            <Route path="/profile">
              <MyProfile username={username} />
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
