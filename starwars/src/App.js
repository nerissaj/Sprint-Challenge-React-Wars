import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import People from './components/People';

const App = () => { 
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [name, setName] = useState([]);
  

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    //const fetchData = () => {
        //console.log("The  effect hook has run")

    axios.get('https://swapi.co/api/people/1/')
  
  
        
    
  .then(data => {
    setName(data);
  });  
    },[]);
    
  return (
    <div className="App">
     
     <h1 className="Header">React Wars</h1>
     
        
        
     

    
</div>
  )}

export default App;