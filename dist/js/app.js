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


   db.collection("users").add({
    first: "Ana",
    last: "Hernandez",
    born: 1995
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});



