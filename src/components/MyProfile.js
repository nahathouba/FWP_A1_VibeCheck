import { Alert, Modal } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import EditUserForm from "./EditUserForm";

function MyProfile() {
  const history = useHistory();

  const { user, deleteUser } = useContext(UserContext);

  const [showAlert, setShowAlert] = useState(false);

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleShowAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000)
  }

  const deleteAccount = () => {
    deleteUser();
    history.push("/");
  }

  useEffect(() => {
    return () => {
      handleShowAlert();
    }
  }, [user])

  return (
    <>
      <Alert variant="success" show={showAlert}>
        Sucessfully edited profile details!
      </Alert>

      <div class="container shadow p-4 mb-5 bg-white rounded">
        <div class="border-bottom">
          <div class="row">
            <div>
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
              <div>
                <button onClick={handleShow} className="btn text-warning m-2" data-toggle="modal"><i className="material-icons">&#xE254;</i></button>
                <button onClick={deleteAccount} className="btn text-danger m-2" data-toggle="modal"><i className="material-icons">&#xE872;</i></button>
              </div>
            </div>
          </div>
        </div>
        <div class="p-2">
          <span>Join:</span>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <EditUserForm handleClose={handleClose} />
        </Modal.Body>

        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MyProfile;
