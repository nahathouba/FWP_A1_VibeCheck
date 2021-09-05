import { v4 as uuidv4 } from "uuid";

const USERS_KEY = "users";
const USER_KEY = "user";

// Initialise local storage "users" with data, if the data is already set this function returns immediately
function initUsers() {
  // Stop if data is already initialised
  if (localStorage.getItem(USERS_KEY) !== null)
    return;

  // User data is hard-coded
  const users = [
    {
      username: "nningthouba",
      password: "thouba123"
    },
    {
      username: "nahathouba",
      password: "thouba123"
    }
  ];

  // Set data into local storage.
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function getUsers() {
  // Extract user data from local storage.
  const data = localStorage.getItem(USERS_KEY);

  // Returning Converted data objects.
  return JSON.parse(data);
}

function verifyUser(email, password) {
  const users = getUsers();
  for (const user of users) {
    if (email === user.email && password === user.password) {
      setUser(email);
      return true;
    }
  }

  return false;
}

function setUser(username) {
  const usersData = getUsers();

  for (const user of usersData) {
    if (user.email === username) {
      localStorage.setItem(USER_KEY, JSON.stringify(user));
    }
  }

  //localStorage.setItem(USER_KEY, username);
}

function getUser() {
  return localStorage.getItem(USER_KEY);
}

function removeUser() {
  localStorage.removeItem(USER_KEY);
}

function setNewUser(name, email, password) {
  var userExist = isUserAlreadyExist(name, password);
  if (userExist === false) {
    if (localStorage.getItem(USERS_KEY) === null || localStorage.getItem(USERS_KEY) === "null") {
      const newUser = [{ id: uuidv4(), name: name, email: email, password: password }]

      localStorage.setItem(USERS_KEY, JSON.stringify(newUser));
      return;
    }

    const newUser = { id: uuidv4(), name: name, email: email, password: password };

    var oldUsers = JSON.parse(localStorage.getItem(USERS_KEY));
    oldUsers.push(newUser);

    localStorage.setItem(USERS_KEY, JSON.stringify(oldUsers));
  }
}

function isUserAlreadyExist(name, email) {
  const users = getUsers();
  if (users === null)
    return false;

  for (const user of users) {
    if (user.name === name && user.email && email)
      return true;
  }
  return false;
}

function deleteUserAccount(id) {
  const users = getUsers();
  if (users === null)
    return

  var index;
  for (const user of users) {
    if (user.id === id) {
      index = users.indexOf(user);
    }
  }

  if (index >= 0) {
    users.splice(index, 1);
  }

  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function validateUserCreds(email, password) {
  const MAIL_FORMAT = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  let valid = { validEmail: false, validPassword: false };

  if (email.match(MAIL_FORMAT))
    valid.validEmail = true;

  if (password !== "")
    valid.validPassword = true;

  return valid;
}

function getUserName() {
  const currentUser = getUser();

  return JSON.parse(currentUser.name);
}

export {
  initUsers,
  verifyUser,
  getUser,
  removeUser,
  setNewUser,
  validateUserCreds,
  getUserName,
  setUser,
  getUsers,
  deleteUserAccount
}
