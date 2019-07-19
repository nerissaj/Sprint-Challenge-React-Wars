import React, {useState, useEffect} from 'react';
import axios from 'axios';
import PeopleCard from './PeopleCard.js';

function People(){
    const[peopleData, setPeopleData] = useState();
    useEffect(()=>{



        axios.get('https://swapi.co/api/people/3/')
        .then(res => {
            setPeopleData(res.data.results)

        })
        .catch(err => console.log(err));

    },[])
    console.log(peopleData)
    
    if(!peopleData){
        
    }















export default People