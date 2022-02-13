var firebaseConfig = {
      apiKey: "AIzaSyAN4qez_uQ7FB-FdA9UEita5ugrwvX02A8",
      authDomain: "kwitter-bcc62.firebaseapp.com",
      projectId: "kwitter-bcc62",
      storageBucket: "kwitter-bcc62.appspot.com",
      messagingSenderId: "354075107705",
      appId: "1:354075107705:web:fc65f0bfb2ee9b04468fa8"
    };
  
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
