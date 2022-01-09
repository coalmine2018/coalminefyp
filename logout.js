firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
        location.replace("index.html")  
    } else {
      // User is signed out
      // ...
    }
  });
function signOut(){
    firebase.auth().signOut().then(() => {
    
    }).catch((error) => {
      // An error happened.
    });
  }