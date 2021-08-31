import React, { useState } from "react";
import { setNewUser } from "../data/repository";

function Signup(props) {
    const [fields, setFields] = useState({ username: "", password: ""});
    const [errorMessage, setErrorMessage] = useState(null);

    const handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        // Copy fields
        const temp = { username: fields.username, password: fields.password };

        // Update field and state
        temp[name] = value;
        setFields(temp);        
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const newUser = { username: fields.username, password: fields.password };
        setNewUser(newUser);

        props.history.push("/login");
    }

    return (
        <div>
          <h1>Signup</h1>
          <hr />
          <div className="row">
            <div className="col-md-6">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="username" className="control-label">Username</label>
                  <input name="username" id="username" className="form-control"
                    value={fields.username} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="control-label">Password</label>
                  <input type="password" name="password" id="password" className="form-control"
                    value={fields.password} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                  <input type="submit" className="btn btn-primary" value="Login" />
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



