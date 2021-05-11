import firebase from "firebase/app";
import "firebase/firestore";
import 'firebase/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBQBdf4ZPgOFNpn86inXTthjhyKI1bgULk",
    authDomain: "ftse-2556d.firebaseapp.com",
    projectId: "ftse-2556d",
    storageBucket: "ftse-2556d.appspot.com",
    messagingSenderId: "560208722179",
    appId: "1:560208722179:web:110045e724f0471389d136",
    measurementId: "G-DRZYZQXV9Z"
  };


  firebase.initializeApp(firebaseConfig);

  export default firebase;

/*
import firebase from "../firebase";
const names=[];
var storage = firebase.storage();
  var storageRef=storage.ref();
  var i=0;
  storageRef.listAll().then(function(result)
  {
    result.items.forEach(function(imageRef)
   {
      i++;
      displayImage(i,imageRef);
   });

  });

  function displayImage(row,images)
  {
        images.getDownloadURL().then(function(url){

          console.log(url);
          

        });
  }

*/