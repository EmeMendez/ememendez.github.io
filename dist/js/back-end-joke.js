firebase.initializeApp({
    apiKey: "AIzaSyD8xi0rcvPLVP234-ZBC9RTA7V8pp5j44E",
    authDomain: "emelon-3cbf7.firebaseapp.com",
    projectId: "emelon-3cbf7",
    databaseURL: "https://emelon-3cbf7.firebaseio.com",
    storageBucket: "emelon-3cbf7.appspot.com",
    messagingSenderId: "841291695563",
    appId: "1:841291695563:web:91725934644cc78578e24e",
    measurementId: "G-T4FSSQ2SVZ"
  });
   // Initialize Firebase
var db = firebase.firestore();

var radio_default = document.querySelector("#default");
var radio_modified = document.querySelector("#modified");
var div_config = document.querySelector("#div_config");
radio_default.addEventListener("click",function(){
   div_config.style.display = "none";
});

radio_modified.addEventListener("click",function(){
   div_config.style.display = "block";
});




var btn = document.querySelector("#btn");
btn.addEventListener("click",function(){
    let location = document.querySelector("#location").value;
    let phone = document.querySelector("#phone").value;
    let email = document.querySelector("#email").value;
    db.collection("contact").doc("modified").set({
        location: location,
        phone: phone,
        email: email 
    })
    .then(function() {
        console.log("Document successfully written!");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
});