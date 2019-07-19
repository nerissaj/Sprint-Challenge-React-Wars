import React, {useState, useEffect} from 'react';
import axios from 'axios';
import PeopleCard from './PeopleCard';



function People(){
    const [peopleData, setPeopleData] = useState({});
   
    useEffect(()=>{
       



        axios
        .get('https://henry-mock-swapi.herokuapp.com/api')
        .then(res => {setPeopleData(res.data);
            const data = res.data; 
        })
    
        .catch(err => console.log(err));

    },[])
    console.log(peopleData)
    
    if (!peopleData){
      return <h1>Loading......</h1>
    }else {
    const People = props =>{
        return(
            
            <div>
               
                {People.map(people => <PeopleCard people={name}  key={index}  />)
                }

            </div>
            
            );
         
    }}
    
    export default People