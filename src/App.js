import React from 'react';
import './App.css';
import FetchUser from "./components/User"


class App extends React.Component {
  render(){
    return (
      <div className="App">
        <FetchUser/>
      </div>
    );
  }
 
}

export default App;
