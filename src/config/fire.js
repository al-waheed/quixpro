import firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyBDHlq2SIwdjPpHTg0-PWe4G9P8TNysdPw",
    authDomain: "footballquiz-77736.firebaseapp.com",
    databaseURL: "https://footballquiz-77736.firebaseio.com",
    projectId: "footballquiz-77736",
    storageBucket: "footballquiz-77736.appspot.com",
    messagingSenderId: "75726301020",
    appId: "1:75726301020:web:3290e04348c17433a30399"
  };

  const fire = firebase.initializeApp(firebaseConfig);
   
export default fire;