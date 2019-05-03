import * as firebase from 'firebase';
const config = {
  apiKey: "AIzaSyAeApyeDm5W8LasnPtaNVnoVgLahzlYjy0",
  authDomain: "bloodpressure-ba3c7.firebaseapp.com",
  databaseURL: "https://bloodpressure-ba3c7.firebaseio.com",
  projectId: "bloodpressure-ba3c7",
  storageBucket: "bloodpressure-ba3c7.appspot.com",
  messagingSenderId: "819341019107",
  appId: "1:819341019107:web:fdafbd771c9a25af"
}
firebase.initializeApp(config);

export default firebase;
