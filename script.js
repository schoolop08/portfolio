
// List of prohibited names or words
var prohibitedNames = [
  "papa", "baap", "maa", "madarchod", "bahenchod", "gandu", "chutiya",
  "bhosdike", "laude", "loda", "lodu", "chut", "lund", "haraami", "kutta",
  "kamina", "saala", "chakka", "hijra", "randi", "randwa", "kutti", "suar",
  "gaand", "bitch", "fuck", "motherfucker", "asshole", "bastard", "slut",
  "dick", "pussy", "cunt", "whore", "nigger", "shit", "dumbass", "retard",
  "twat", "prick", "wanker", "piss", "jerk", "cock", "fucker", "ass", "arse",
  "shag", "dildo", "bollocks", "fag", "scum", "tosser", "bollocks", "bhen", 
  "mc", "bc", "chod", "chutiya", "pataka", "jhant", "rakhail", "kameena", 
  "tatti", "sala", "chuti", "kutti", "haraamzada", "bancho", "haramkhor", 
  "ullu", "bevda", "nashedi", "chhakka", "faadu", "bakchod", "jhaant", "chutya",
  "loda", "raand", "gand", "bhenchod", "madar", "gaand", "suar", "kalank", "maa ki", 
  "bhen ki", "gaandu", "kamina", "ullu ke pathe", "saale", "kutiya", "choot", "kutta"
];


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