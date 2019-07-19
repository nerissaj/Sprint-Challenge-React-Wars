import React from 'react';




function PeopleCard(props){
    console.log('props', props);

    return(
        <div>
           <p></p>
            <p>name:{props.person.name}</p>
            <p>species:{parentPort.person.species}</p>
        </div>
    )
}
export default PeopleCard;