import firebase from "../firebase";
import './NameList.css';
import React, { useState,useEffect } from 'react';
var names=[];
var i_name=[];
function NameList()
 {    
      const [urls, seturls] = useState([]);

      useEffect(() => {
        var storage = firebase.storage();
        var storageRef=storage.ref();
        var i=0;
        storageRef.listAll().then(function(result)
        { 
          result.items.forEach(function(imageRef)
         {  
           i++;
           //console.log(imageRef.name)
            displayImage(i,imageRef);
        });
  
        });
  
        function displayImage(row,images)
        { 
          images.getDownloadURL().then(function(url){
          
            let urlx = [...urls];
            urlx.push(url);
            seturls(urlx);
            names.push(urlx);
            i_name.push({[urlx]:images.name})
           
          });
        }

      }, []);

   
    var namelist=i_name.map((x) => <a style={{color: 'white'}} href={Object.keys(x)}><h6 key={Object.values(x)}>{Object.values(x)}</h6></a> );     
     return  (
      <div className="List-container">
        {namelist}
      </div>
      )
  
    
     
   
 }
  export default NameList;