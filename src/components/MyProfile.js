import { Alert, Modal, Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import EditUserForm from "./EditUserForm";

function MyProfile() {
  const history = useHistory();

  const { user, deleteUser } = useContext(UserContext);

  // State for alert which is use to indicate when successfully changed profile details
  const [showAlert, setShowAlert] = useState(false);

  // State for edit profile details modal
  const [showEditModal, setShowEditModal] = useState(false);

  // State for delete user account modal
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleShowEdit = () => setShowEditModal(true);
  const handleCloseEdit = () => setShowEditModal(false);

  const handleCloseDelete = () => setShowDeleteModal(false);

  const handleShowAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000)
  }

  const handleDelete = () => {
    setShowDeleteModal(true);
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
                <button onClick={handleShowEdit} className="btn text-warning m-2" data-toggle="modal"><i className="material-icons">&#xE254;</i></button>
                <button onClick={handleDelete} className="btn text-danger m-2" data-toggle="modal"><i className="material-icons">&#xE872;</i></button>
              </div>
            </div>
          </div>
        </div>
        <div class="p-2">
          <span>Join:</span>
        </div>
      </div>

      {/* Modal to edit user profile details */}
      <Modal show={showEditModal} onHide={handleCloseEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <EditUserForm handleClose={handleCloseEdit} />
        </Modal.Body>

        <Modal.Footer>
        </Modal.Footer>
      </Modal>

      {/* Modal to confirm deleting user account */}
      <Modal show={showDeleteModal} onHide={handleCloseDelete}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Account</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Confirm to delete your account.
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDelete}>
            CANCEL
          </Button>
          <Button variant="danger" onClick={deleteAccount}>
            CONFIRM
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MyProfile;
