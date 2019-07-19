import React from 'react';
import styled from 'styled-components'

const StyledDiv = styled.div`
border: 5px solid green;
`;

function People(props){
    console.log('props', props);

    return(
        <StyledDiv>
          
            <p> name: {props.person.name}</p>
            <p> species: {props.person.species}</p>
            <p>films: {props.name.films}</p>
        </StyledDiv>
    )
}
export default People;