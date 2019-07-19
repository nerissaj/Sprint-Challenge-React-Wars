import React from 'react';
import styled from 'styled-components'

const Div = styled.div`
border: 5px solid green;
`;

function PeopleCard(props){
    console.log('props', props);

    return(
        <StyledDiv>
           <p></p>
            <p>name: {props.name}</p>
            <p>species: {props.species}</p>
            <p>films: {props.films}</p>
        </StyledDiv>
    )
}
export default PeopleCard;