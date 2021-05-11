import { render } from '@testing-library/react';
import React from 'react';
import './App.css';
import Card from './Components/Card';

function App() {
 

  return (
   
    <div className="App">
      <Card
      title ="Scan QR To Upload"
      imageUrl="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=uploadimagestorage.herokuapp.com/"
      body="Below field shows the files in the queue"
      />
    </div>
  )
        
}

export default App;
