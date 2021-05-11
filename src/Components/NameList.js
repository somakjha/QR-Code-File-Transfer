import { render } from '@testing-library/react';
import firebase from "../firebase";
import React, { useState,useEffect } from 'react';
var names=[];
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
           
          });
        }

      }, []);

       
      
     console.log(names.length)
     var namelist=names.map((x) => <h6 key={x}><a key={x} href={x}>{x}</a></h6>);
     return  (<div>{namelist}</div>); 
    
     
   
 }
  export default NameList;