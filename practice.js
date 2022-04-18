
//ADD YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyA9Dh7ezpRz_CN9YTxSsHi9qvKqCforwg8",
    authDomain: "kwitter2-8469a.firebaseapp.com",
    projectId: "kwitter2-8469a",
    storageBucket: "kwitter2-8469a.appspot.com",
    messagingSenderId: "534490090406",
    appId: "1:534490090406:web:b0bc16e1ae960f95e05d67"
  };
  function addUser(){
    user_name= document.getElementById("user_name").value;

    firebase.database().ref("/").child(user_name).update
    ({
         purpose : "adding user"