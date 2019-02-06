import firebase from "firebase";

var config = {
  apiKey: "AIzaSyD-X9CyQmFeLF0GJVg1nXLDuySwf_y0RVg",
  authDomain: "moviedb-bdbef.firebaseapp.com",
  databaseURL: "https://moviedb-bdbef.firebaseio.com",
  projectId: "moviedb-bdbef",
  storageBucket: "moviedb-bdbef.appspot.com",
  messagingSenderId: "790551722830"
  };

firebase.initializeApp(config);

export default firebase;