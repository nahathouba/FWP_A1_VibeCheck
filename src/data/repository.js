const USERS_KEY = "users";
const USER_KEY = "user";

// Initialise local storage "users" with data, if the data is already set this function returns immediately
function initUsers() {
  // Stop if data is already initialised
  if(localStorage.getItem(USERS_KEY) !== null)
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

function verifyUser(username, password) {
  const users = getUsers();
  for(const user of users) {
    if(username === user.username && password === user.password)
    {
      setUser(username);
      return true;
    }
  }

  return false;
}

function setUser(username) {
  localStorage.setItem(USER_KEY, username);
}

function getUser() {
  return localStorage.getItem(USER_KEY);
}

function removeUser() {
  localStorage.removeItem(USER_KEY);
}

function setNewUser(newUser) {
  let oldUsers = JSON.parse(localStorage.getItem(USERS_KEY));
  oldUsers.push(newUser);

  localStorage.setItem(USERS_KEY, JSON.stringify(oldUsers));  
}

export {
  initUsers,
  verifyUser,
  getUser,
  removeUser,
  setNewUser
}
