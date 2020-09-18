import React from 'react';
// import './App.css';
import axios from 'axios'

function App() {

  const automate = async() => {
    const response = await axios({
      method: "post",
      url: "http://localhost:5000/screenshot",
      data: {
        "email": "gouthamikyatham4@gmail.com",
        "password": "9493154676nani",
      },
    })
    console.log(response)
  }
  
  return (
    <div className="App">
      {/* <button onClick={automate}>Automate</button> */}
    </div>
  );
}

export default App;