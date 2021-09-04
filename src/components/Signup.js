import React, { useState } from "react";
import { setNewUser, validateUserCreds } from "../data/repository";

function Signup(props) {
  const [fields, setFields] = useState({ name: "", email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState(null);

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    // Copy fields
    const temp = { name: fields.name, email: fields.email, password: fields.password };

    // Update field and state
    temp[name] = value;
    setFields(temp);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validates the user credentials
    const validUser = validateUserCreds(fields.email, fields.password);

    // If user credentials are valid create the new user
    if (validUser.validEmail === true && validUser.validPassword === true) {
      const newUser = [{ name: fields.name, email: fields.email, password: fields.password }];
      setNewUser(newUser);

      props.history.push("/signin");
      return;
    }

    // Checking whether the email or password is valid.
    if (validUser.validEmail === false) {
      setErrorMessage("Invalid email!");
    } else if (validUser.validPassword === false) {
      setErrorMessage("Password cannot be empty!")
    }
  }

  return (
    <div>
      <h1>Sign Up</h1>
      <hr />
      <div className="row">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="control-label">Name</label>
              <input name="name" id="name" className="form-control"
                value={fields.name} onChange={handleInputChange} />
            </div>
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

export default Signup;