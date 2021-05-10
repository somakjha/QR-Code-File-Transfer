import React from 'react';
import './Card.css';
import firebase from "../firebase";


function Card({title,imageUrl,body}) {

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

  return (
   
    <div className="card-container">
        <div className="image-container">
            <img src={imageUrl} alt=""/>
        </div>
        <div className="card-content">
               <div className="card-title">
                  <h3>{title}</h3>
               </div>
               <div className="card-body">
                  <p><b>{body}</b></p> 
               </div>
        </div>
        

    </div>
  );
}

export default Card;
