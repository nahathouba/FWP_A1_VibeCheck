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
  if (localStorage.getItem(USERS_KEY) === null) {
    const newUser = [{ name: name, email: email, password: password }]

    localStorage.setItem(USERS_KEY, JSON.stringify(newUser));
    return;
  }

  const newUser = { name: name, email: email, password: password };

  var oldUsers = JSON.parse(localStorage.getItem(USERS_KEY));
  oldUsers.push(newUser);

  localStorage.setItem(USERS_KEY, JSON.stringify(oldUsers));
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
  getUsers
}
