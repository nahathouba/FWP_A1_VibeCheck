import { Form, Button } from "react-bootstrap"
import { UserContext } from '../contexts/UserContext';
import { useContext, useState, useEffect } from 'react';
import { getUsers, setNewUser, deleteUserAccount } from "../data/repository";

const EditUserForm = (props) => {
    const { user, updateUser } = useContext(UserContext);

    const [fields, setFields] = useState(user);

    const handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        // Copy fields
        const temp = { name: fields.name, email: fields.email, password: fields.password };

        // Update field and state
        temp[name] = value;
        setFields(temp);
    }

    const updatedUserDetails = { name: fields.name, email: fields.email, password: fields.password }

    const handleSubmit = (e) => {
        e.preventDefault();
        updateUser(updatedUserDetails)
    }

    useEffect(() => {
        var oldUser = getUsers();
        if (oldUser === null)
            return

        setNewUser(fields.name, fields.email, fields.password);
        deleteUserAccount(user.id);
    }, [user])

    return (

        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Name *"
                    name="name"
                    value={fields.name}
                    onChange={handleInputChange}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="email"
                    placeholder="Email *"
                    name="email"
                    value={fields.email}
                    onChange={handleInputChange}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="password"
                    placeholder="Password *"
                    name="password"
                    value={fields.password}
                    onChange={handleInputChange}
                />
            </Form.Group>
            <Button variant="success" type="submit" block onClick={props.handleClose}>
                Edit User
            </Button>
        </Form>

    )
}

export default EditUserForm;