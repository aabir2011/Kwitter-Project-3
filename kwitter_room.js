var firebaseConfig = {
    apiKey: "AIzaSyDmgvX9vGFM-OGiykkX_H3_piTolvwcA8A",
    authDomain: "chat-app-59431.firebaseapp.com",
    databaseURL: "https://chat-app-59431-default-rtdb.firebaseio.com",
    projectId: "chat-app-59431",
    storageBucket: "chat-app-59431.appspot.com",
    messagingSenderId: "1048781662952",
    appId: "1:1048781662952:web:0b6247fd89e61ad7fb375d"    
}
user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome"   + user_name + "!";

function addRoom()
{
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
    });
    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";

}
function getData() 
{
    firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;

    console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML += row;

    });});}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
