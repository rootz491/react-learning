import React, { useState } from "react";
import styled from "styled-components";

import LoginForm from "./loginForm";
import SignupForm from "./signupForm";
import LogoutButton from "./logout";

const NavBar = props => {
    const [auth, setAuth] = useState( props.user ? "" : "signup" );
    

    return(
        <div>
            <Nav>
                {
                    !props.user ?
                    <div>
                        <Button onClick={() => {setAuth('login')}} id="#login">login</Button>
                        <Button onClick={() => {setAuth('signup')}} id="#signup">sign up</Button>
                    </div>
                    :
                    <LogoutButton />
                }
            </Nav>

            {   !props.user ?
                (auth === 'login' ? 
                <LoginForm /> : 
                (auth === 'signup' ? 
                <SignupForm /> : 
                null)) :
                null
            }
        
        </div>
    );
}


export default NavBar;

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 1em 2em
`;

const Button = styled.button`
    background: linear-gradient(91.4deg, #2fb8ff 0%, #9eecd9 100%);
    padding: 12px 0;
    width: 200px;
    border: none;
    border-radius: 30px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    margin: 0 1em
`;
