import React from "react";
import { getUser } from "../data/repository";

function MyProfile(props) {
  const user = JSON.parse(getUser());

  return (
    <div class="shadow p-3 mb-5 bg-white rounded">
      <h1 class="display-4 text-info">Profile</h1>
      <div class="container">
        <div class="row text-left">
          <div class="col">
            <img class="rounded-circle" alt="Profile Avatar" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg" />
          </div>
          <div class="col">
            <h4>{user.name}< br /> {user.email}</h4>
          </div>
          <div class="col"></div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
