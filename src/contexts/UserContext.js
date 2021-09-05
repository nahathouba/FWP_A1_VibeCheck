import { createContext, useState } from "react";
import { getUser } from "../data/repository";
import { removeUser } from "../data/repository";

export const UserContext = createContext();

const UserContextProvider = (props) => {
    const [user, setUser] = useState(JSON.parse(getUser()));

    const signinUser = (username) => {
        setUser(username);
    }

    const signoutUser = () => {
        removeUser();
        setUser(null);
    }


    const deleteUser = () => {
        setUser(null);
        removeUser();
    }

    const updateUser = (updatedUserdetails) => {
        setUser(updatedUserdetails);
    }

    return (
        <UserContext.Provider value={{ user, deleteUser, signoutUser, signinUser, updateUser }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;