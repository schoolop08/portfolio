
// List of prohibited names or words
var prohibitedNames = ["baap", "ka", "ki"];

// Check if a username already exists in local storage
var storedUser = localStorage.getItem("username");

if (storedUser) {
  // If found, use the stored username
  setUser(storedUser);
} else {
  askForName();
}

function askForName() {
  var user = prompt("Quick Question! What is Your Name?");
  
  // Check if the name contains any of the prohibited words
  if (containsProhibitedWord(user.toLowerCase())) {
    alert("The name you entered contains prohibited words. Please enter a different name.");
    askForName(); // Ask again
  } else {
    localStorage.setItem("username", user);
    setUser(user);
  }
}

function containsProhibitedWord(name) {
  // Check if the name contains any of the prohibited words
  return prohibitedNames.some(function(prohibitedWord) {
    return name.includes(prohibitedWord);
  });
}

function setUser(user) {
  var userHtml = document.querySelector(".user");
  userHtml.innerHTML = user;
}