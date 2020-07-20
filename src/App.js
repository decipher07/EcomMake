import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{

  constructor(){
    super();
    
    this.state = {
      monsters: []
    }
  }

  componentDidMount(){
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((res) => res.json())
    .then((users) => {
      return this.setState({ monsters: users})
    })
  }

  render(){
    return (
      <div className="App">
        {
          this.state.monsters.map((monster) => {
            return <h1 key={monster.id}>{monster.name}</h1>
          })
        }
      </div>
    );
  }
}


export default App;