import React from "react";
import { getUser } from "../data/repository";

function MyProfile() {
  const user = JSON.parse(getUser());

  return (
    <div class="container shadow p-3 mb-5 bg-white rounded">
      <div class="border-bottom">
        <div class="row">
          <div class="col-sm-12">
            <h1 class="text-info">Profile</h1>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6 p-2">
            <img class="avatar avatar-128 bg-light rounded-circle w-25"
              src="https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-4.jpg" alt="User Avatar" />
          </div>
          <div class="col-sm-6 p-2">
            <h4>{user.name} <br /> {user.email}</h4>
          </div>
        </div>
      </div>
      <div class="p-2">
        <span>Join:</span>
      </div>
    </div>
  );
}

export default MyProfile;
