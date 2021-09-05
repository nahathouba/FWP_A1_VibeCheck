import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext"

function Navbar(props) {
  const { user, signoutUser } = useContext(UserContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Vibe Check</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            {user !== null &&
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/profile">My Profile</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/forum">Forum</Link>
                </li>
              </>
            }
          </ul>
          <ul className="navbar-nav">
            {user === null ?
              <li className="nav-item">
                <Link className="nav-link" to="/signin">SIGN IN</Link>
              </li>
              :
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/signin" onClick={signoutUser}>SIGN OUT</Link>
                </li>
              </>
            }
            {user === null ?
              <li className="nav-item">
                <Link className="nav-link" to="/signup">SIGN UP</Link>
              </li>
              :
              <></>
            }
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
