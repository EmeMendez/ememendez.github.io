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


getRealTime = function(){
    let location = document.querySelector('#location'); 
    let phone = document.querySelector('#phone');
    let email = document.querySelector('#email'); 
    var docRef = db.collection("contact").doc("default");
docRef.onSnapshot(function(doc){
    if (doc.exists) {
        location.innerHTML = doc.data().location;
        phone.innerHTML = doc.data().phone;
        email.innerHTML = doc.data().email;
    } else {
        console.log("No such document!");
    }
});
}

getRealTime();