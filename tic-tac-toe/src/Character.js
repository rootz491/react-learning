import React from "react";
import styled from "styled-components";

const Character = props => {

    return (
        <Char key={props.character.id}>
            <CharImg>
                <Img src={props.character.image} alt="character img" />
            </CharImg>
            <CharDesc>
                <Name>{props.character.name}</Name>
                <From>From {props.character.origin.name}</From>
                <p>appeared in {props.character.episode.length} episodes.</p>
            </CharDesc>
        </Char>
    );
}

export default Character;


const Char = styled.div`
    width: 200px;
`;

const CharImg = styled.div`
    width:  70%;
    margin: auto;
`;

const Img = styled.img`
    width: 100%;
    border-radius: 100%;
`;

const CharDesc = styled.div`
    padding: 1em;
    color: white;
    background-color: purple;
    min-height: 130px;
`;

const Name = styled.h1`
    font-size: 18px
`;

const From = styled.h2`
    font-size: 15px
`;