import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Signin from "./Signin";
import MyProfile from "./MyProfile";
import Forum from "./Forum";
import Signup from "./Signup";


function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Router>
        <Navbar />
        <main role="main">
          <div className="container my-4">
            <Switch>
              <Route path="/signin">
                <Signin />
              </Route>
              <Route path="/signup">
                <Signup />
              </Route>
              <Route path="/profile">
                <MyProfile />
              </Route>
              <Route path="/forum">
                <Forum />
              </Route>
              <Route path="/">
                <Home />
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
