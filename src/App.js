import logo from './logo.svg';
import './App.css';
import React from 'react';
import logoBeeHappy from './Bee-happy-580x386.svg';


function App(props) {
/*tslint:disabled*/
  const [name, setName] = React.useState("World");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logoBeeHappy} className="App-logo" alt="logo" />
        <h1>Hello, {name}!</h1>
          <input type="text" onChange={() => setName(event.target.value)}/>
      </header>
    </div>
  );
}

export default App;
