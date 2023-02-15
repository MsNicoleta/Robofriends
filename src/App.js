<<<<<<< HEAD
import React, {Component} from "react";
import CardList from './CardList';
import SearchBox from './SearchBox';
import {robots} from './robots';

=======
import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/Learning Reack</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
 }
}
>>>>>>> master

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ''

        }
    }
    onSearchChange = (event) =>{
        this.setState({searchfield: event.target.value})
        }

        render () {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
            return (
                    <div className = 'tc'>
                        <h1 className= 'f'>RoboFriends</h1>
                        <SearchBox searchChange = {this.onSearchChange}/>
                        <CardList robots={filteredRobots} />
                    </div>
                );

    }
}
export default App;