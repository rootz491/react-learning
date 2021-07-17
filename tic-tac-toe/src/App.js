import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./App.css"
import Character from "./Character";




const App = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/[1,3,5,7,9,11,13,15,17,19,21]', {mode: 'cors'})
            .then(res => res.json())
            .then(data => setCharacters(data))
            .catch(err => console.log(err));
    }, [])

    return (
        <Root>
            <Heading>The Rick & Morty world</Heading>
            <Characters >
            {
                characters ? 
                characters.map(character => <Character character={character} />) :
                "no characters available at the moment!"
            }
            </Characters>
        </Root>
    );
}

export default App;

const Root = styled.div`
    box-sizing: border-box;
`;

const Heading = styled.h1`
    font-size: 25px;
    color: purple;
    margin: 1em 0;
    text-align: center;
`;

const Characters = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 200px);
    gap: 2em;
    justify-contect: center;
    margin: 2em auto;
`;