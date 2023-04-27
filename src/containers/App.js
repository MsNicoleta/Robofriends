import React, { useState, useEffect} from "react";
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import Scroll from './components/Scroll';
import ErrorBoundry from './components/ErrorBoundry';
import './App.css';

 function App () {
    // constructor() {
    //     super()
    //     this.state = {
    //         robots: [],
    //         searchfield: ''
    //     }
     //the useStatehook is going to show us 2 thing: 1st is the robots- part of our state and 2nd is the setRobots - that is the function that changes the state.
     // we add the use State thath we have imported from react and then we give it an empty array
    const [robots, setRobots]= useState ([])
    const [searchfield, setSearchfield]= useState ('')
    
     useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(responce => responce.json())
            .then(users => { setRobots(users) });
         console.log(robots,searchfield)
    },[])

   
    const onSearchChange = (event) =>{
        setSearchfield(event.target.value)
    }

        
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return!robots.length?
        <h1>Loading</h1>:
         (
                <div className = 'tc'>
                    <h1 className= 'f1 mb0'>Robo Friends</h1>
                     <SearchBox searchChange={onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundry>

                    </Scroll>
                </div>
        );
        
         }

    


export default App;