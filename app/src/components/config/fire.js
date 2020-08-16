var firebase = require("firebase/app");
require("firebase/auth");

var firebaseConfig = {
  apiKey: "AIzaSyB7gNv-35MQg-8R5WsqkH-CMrM5Z_UuStY",
  authDomain: "hack20-286521.firebaseapp.com",
  databaseURL: "https://hack20-286521.firebaseio.com/",
  projectId: "hack20-286521",
  storageBucket: "hack20-286521.appspot.com",
  messagingSenderId: "1079492770177",
  appId: "1:1079492770177:web:6d3eddb0ddb920f4e75080",
  measurementId: "G-ETX3FHCTQ5",
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
