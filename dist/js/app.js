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


function ifDefault(){
    var flag = false;
    var docRef = db.collection("contact").doc("default");
    docRef.get().then(function(doc) {
        if (doc.exists) {
            if(doc.data().default == true){
                getContact("default");
            }else{
                getContact("modified");
            }
        }
         else {
            console.log("No existe el documento");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
}




function getContact(query){
    var docRef = db.collection("contact").doc(query);
    docRef.get().then(function(doc) {
        let location = document.querySelector('#location'); 
        let phone = document.querySelector('#phone');
        let email = document.querySelector('#email');  
        if (doc.exists) {
            location.innerHTML = doc.data().location;
            phone.innerHTML = doc.data().phone;
            email.innerHTML = doc.data().email;
        } else {
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
}


ifDefault();



