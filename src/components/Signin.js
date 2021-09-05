import React, { useState } from "react";
import { useContext } from "react";
import { useHistory } from "react-router";
import { UserContext } from "../contexts/UserContext";
import { verifyUser } from "../data/repository";

function Signin() {
  const { signinUser } = useContext(UserContext);

  const history = useHistory();

  const [fields, setFields] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState(null);

  // Generic change handler.
  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    // Copy fields.
    const temp = { email: fields.email, password: fields.password };

    // Update field and state.
    temp[name] = value;
    setFields(temp);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const verified = verifyUser(fields.email, fields.password);

    // If verified signin the user.
    if (verified === true) {
      signinUser(fields.email);
      // Navigate the user to the home page.
      history.push("/");
      return;
    }

    // Reset password field to blank.
    const temp = { ...fields };
    temp.password = "";
    setFields(temp);

    // Set error message.
    setErrorMessage("Username and / or password invalid, please try again.");
  }

  return (
    <div>
      <h1>Sign In</h1>
      <hr />
      <div className="row">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email" className="control-label">Email</label>
              <input name="email" id="email" className="form-control"
                value={fields.email} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="control-label">Password</label>
              <input type="password" name="password" id="password" className="form-control"
                value={fields.password} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <input type="submit" className="btn btn-primary" value="SUBMIT" />
            </div>
            {errorMessage !== null &&
              <div className="form-group">
                <span className="text-danger">{errorMessage}</span>
              </div>
            }
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signin;
