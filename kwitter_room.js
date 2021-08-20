  // Your web app's Firebase configuration
  var firebaseConfig = {
      apiKey: "AIzaSyAdtkUKwFRQplq6QvlFOsgBpagUPbvXqdE",
      authDomain: "kwitter-final-92514.firebaseapp.com",
      databaseURL: "https://kwitter-final-92514-default-rtdb.firebaseio.com",
      projectId: "kwitter-final-92514",
      storageBucket: "kwitter-final-92514.appspot.com",
      messagingSenderId: "461863921405",
      appId: "1:461863921405:web:55494b29669cd13a568094"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    function godata() {
   username=document.getElementById("euser").value;
  firebase.database().ref("/").child(username).update({purpose:"adding user"});
  }
  usern=localStorage.getItem("user_name");
document.getElementById("displayu").innerHTML=" welcome😀😃😁😆 "+usern+"!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) 
{document.getElementById("show_rooms").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      row="<div class='room_name' id="+Room_names+"onclick='redirectToroomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("show_rooms").innerHTML+=row;

      //End code
      });});}
getData();
function add_room(){
      roomn=document.getElementById("room").value;
     firebase.database().ref("/").child(roomn).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",roomn);
      //window.location="index.html";
}
function redirectToroomName(name){
      localStorage.setItem("room_name", name); window.location = "kwitter_page.html"; 
} function logout() 
{ localStorage.removeItem("user_name"); localStorage.removeItem("room_name"); window.location = "kwitter.html"; }
