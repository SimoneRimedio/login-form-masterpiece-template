const users = require("../../data/users.json");

// Function to authenticate user
function authenticate(username, password) {
  console.log("Input:", username, password);

  for (const user of users) {
    console.log("Checking user:", user.username, user.password);

    if (user.username === username && user.password === password) {
      console.log("User found!");
      return { success: true, additionalInfo: user.additionalInfo };
    }
  }

  console.log("User not found!");
  return { success: false };
}

module.exports = authenticate;
