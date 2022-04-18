const firebaseConfig = {
    apiKey: "AIzaSyA9Dh7ezpRz_CN9YTxSsHi9qvKqCforwg8",
    authDomain: "kwitter2-8469a.firebaseapp.com",
    projectId: "kwitter2-8469a",
    storageBucket: "kwitter2-8469a.appspot.com",
    messagingSenderId: "534490090406",
    appId: "1:534490090406:web:b0bc16e1ae960f95e05d67"
  };
  const app = initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       localStorage(user_name);
       function addRoom(){
        room_name= document.getElementById("room_name").value;
        firebase.database().ref("/").child(user_name).update({
           purpose : "adding user"
  });
  localStorage.setItem("room_name",room_name);
  window.location= "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
function redirectToRoomName(name){
    console.log(name);
    localstorgae.setItem("room_name", name);
    window.location= "kwitter_page.html";
}

//End code
row= "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
});});}
getData();