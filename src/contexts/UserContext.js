import { createContext, useEffect, useState } from "react";
import { getUser, removeUser, getUsers, setNewUser, deleteUserAccount } from "../data/repository";

export const UserContext = createContext();

const UserContextProvider = (props) => {
    const [user, setUserState] = useState(JSON.parse(getUser()));

    useEffect(() => {
        setUserState(JSON.parse(getUser()))
    }, [])

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user));
    })

    const signinUser = (username) => {
        setUserState(username);
    }

    const signoutUser = () => {
        removeUser();
        setUserState(null);
    }


    const deleteUser = () => {
        setUserState(null);
        removeUser();
        deleteUserAccount(user.id);
    }

    const updateUser = (updatedUserdetails) => {
        setUserState(updatedUserdetails);
    }

    return (
        <UserContext.Provider value={{ user, deleteUser, signoutUser, signinUser, updateUser }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;