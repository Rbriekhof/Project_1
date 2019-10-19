$(".post-login").hide()

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCknqWYfzGiVGDZuH7Oj05iwO4ODtxcKng",
  authDomain: "project-1-movie-mania.firebaseapp.com",
  databaseURL: "https://project-1-movie-mania.firebaseio.com",
  projectId: "project-1-movie-mania",
  storageBucket: "project-1-movie-mania.appspot.com",
  messagingSenderId: "887339168286",
  appId: "1:887339168286:web:4c797746ccb92fcb15340f",
  measurementId: "G-VXJ52GSTEQ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

//make the database defined as the firebase
var database = firebase.database();
var playersRef = database.ref("/players")
var playerName = ""
var player1LoggedIn = false
var player2LoggedIn = false
var player3LoggedIn = false
var player4LoggedIn = false
var playerNumber = 0
var playerObject
var player1Object = {
  name: "",
  choice: "",
  strikes: 0
}
var player2Object = {
  name: "",
  choice: "",
  strikes: 0
}
var player3Object = {
  name: "",
  choice: "",
  strikes: 0
}
var player4Object = {
  name: "",
  choice: "",
  strikes: 0
}
var resetId;

// connectionsRef references a specific location in our database.
// All of our connections will be stored in this directory.
var connectionsRef = database.ref("/connections");

// '.info/connected' is a special location provided by Firebase that is updated
// every time the client's connection state changes.
var connectedRef = database.ref(".info/connected");

// When first loaded or when the connections list changes...
connectionsRef.on("value", function (snap) {
  $("#connected-players").text("Number of Players: " + snap.numChildren()) //+ playersRef.name);
  $("#player-number").text(snap.numChildren());
})

// When the client's connection state changes...
connectedRef.on("value", function (snap) {

  // If they are connected..
  if (snap.val()) {

    // Add user to the connections list.
    var con = connectionsRef.push(true);
    // Remove user from the connection list when they disconnect.
    con.onDisconnect().remove();
  }
});
$("#login").on("click", function (event) {
  event.preventDefault();
  $(".pre-connection").hide();
  $("#player-name").hide();
  $("#login").hide();
  $(".post-login").show()


  console.log(playerName)
  console.log(playersRef)
  console.log(playerNumber)
  // check to see which player slot is available
  if (!player1LoggedIn) {
    playerNumber = "1";
    playerObject = player1Object;
  }
  else if (!player2LoggedIn) {
    playerNumber = "2";
    playerObject = player2Object;
  }
  else if (!player3LoggedIn) {
    playerNumber = "3";
    playerObject = player3Object;
  }
  else if (!player4LoggedIn) {
    playerNumber = "4";
    playerObject = player4Object;
  }
  else {
    $(".post-login").text("Too many players sorry")
    playerNumber = null;
    playerObject = null;
  }

  // if a slot was found, update it with the new information
  if (playerNumber) {
    playerName = $("#player-name").val().trim();
    playerObject.name = playerName;
    $("#player-name").val("");

    $("#player-name-display").text(playerName);
    $("#player-number").text(playerNumber);

    database.ref("/players/" + playerNumber).set(playerObject);
    database.ref("/players/" + playerNumber).onDisconnect().remove();
  }
});








connectedRef.on("value", function (snap) {
  if (!snap.val() && playerNumber) {
    database.ref("/players/" + playerNumber).remove();
    playerNumber = null;
  }
});
// when player is added, update respective loggedIn flag and playerObject
playersRef.on("child_added", function (childSnap) {
  window["player" + childSnap.key + "LoggedIn"] = true;
  window["player" + childSnap.key + "Object"] = childSnap.val();
});


// when player is changed, update respective playerObject and stats
playersRef.on("child_changed", function (childSnap) {
  window["player" + childSnap.key + "Object"] = childSnap.val();


});
// when player is removed, reset respective playerObject and loggedIn flag
playersRef.on("child_removed", function (childSnap) {

  window["player" + childSnap.key + "LoggedIn"] = false;
  window["player" + childSnap.key + "Object"] = {
    name: "",
    choice: "",
    strikes: 0
  };
});






function strikecount(){
  if (playerObject.strikes === 3) {
    $()
  }
}


