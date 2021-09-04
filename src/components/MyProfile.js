import React from "react";

function MyProfile(props) {
  return (
    <div class="shadow p-3 mb-5 bg-white rounded">
      <h1 className="display-4">My Profile</h1>
      <h4><strong>Hello {props.username}!</strong></h4>
    </div>
  );
}

export default MyProfile;
