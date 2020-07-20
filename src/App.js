import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{

  constructor(){
    super();
    
    this.state = {
      string:' Hello World DJ'
    }
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
            <p>{this.state.string}</p>
          </p>
          <button onClick={() =>this.setState({string: `Hello DJ, Changing the Set State`})}>Change Text</button>
          
        </header>
      </div>
    );
  }
}


export default App;
