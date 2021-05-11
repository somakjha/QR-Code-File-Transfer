import React from 'react';
import './Card.css';
import NameList from './NameList';

function Card({title,imageUrl,body}) {
  
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
        <NameList/>

    </div>
  );
}

export default Card;
