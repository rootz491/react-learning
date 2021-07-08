import React from "react";
import styled from "styled-components";

import firebase from "../firebase";



const LogoutButton = () => {

    const logout = async () => {
        try {
            if (firebase) {
                await firebase.auth().signOut();
                alert("Sucessfully signed out!");
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <Button onClick={logout}>
            logout
        </Button>
    );
}



export default LogoutButton;

const Button = styled.button`
    background: linear-gradient(91.4deg, #2fb8ff 0%, #9eecd9 100%);
    padding: 12px 0;
    width: 200px;
    border: none;
    border-radius: 30px;
    color: white;
    font-weight: bold;
    cursor: pointer;
`