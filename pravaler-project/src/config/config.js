import firebase from 'firebase';    

const config = {
    apiKey: "AIzaSyAxWdy1WyGIYZuHFYgYCt8aAMUX0Om0-40",
    authDomain: "talent-fest-pravaler.firebaseapp.com",
    databaseURL: "https://talent-fest-pravaler.firebaseio.com",
    projectId: "talent-fest-pravaler",
    storageBucket: "talent-fest-pravaler.appspot.com",
    messagingSenderId: "848973693197",
    appId: "1:848973693197:web:83c5e40f83ff4accee7044",
    measurementId: "G-85S8FTBZBK"
  };

const fire = firebase.initializeApp(config);

export default fire;