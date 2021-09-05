import React from "react";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import logo from "../logo.svg";

function Home() {
  const { user } = useContext(UserContext);

  return (
    <div className="text-center">
      <h1 className="display-4">Home</h1>
      {user !== null && <h4><strong>Hello {user.name}!</strong></h4>}
      <img src={logo} className="w-50" alt="logo" />
    </div>
  );
}

export default Home;
