import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const MyButton = props => {
    //  `count` is state variable, `setCount` is function to set value to count variable & `0` is default value of `count` variable
    const [count, setCount] = useState(0);
    const ref = useRef(null);   //  these are blank references which will point to some element in near future.
    const ref2 = useRef(null);

    //  useEffect -> update every time `count` changes
    useEffect(() => {   //  triggers when component mounts
        document.title = `${props.name} smashed ${count} times 👊🏻`;

        return () => {  //  triggers when component unmounts
            document.title = `Byee ${props.name}`;
        }
    }, [count, props]);    //  pass the updaing state variable


    //  programatically click every time, after component renders
    useEffect(() => {
        if (ref) {  //  ref points to button
            console.log(ref.current);   //  ref.current points to HTML of referenced element.
            ref.current.click();    //  click() is action happening every time component render
        }
        
        if (ref2)   //  ref2 points to h1 tag 
            ref2.current.style.color = "green"; //  changing the color of h1 tag to `green` before component renders.
    }, []);


    return (
        <div>
            <H1 ref={ref2}>This is a functional - hooked component</H1> {/* `ref` property is used to reference element to ref object, which we defined earlier. */}
            <Button ref={ref} onClick={() => setCount(count + 1)}>
                {props.name} clicked {count} times
            </Button>
        </div>
    );
};

export default MyButton;

// styling each element
const Button = styled.button`
    background: linear-gradient(91.4deg, #2fb8ff 0%, #9eecd9 100%);
    padding: 12px 0;
    width: 200px;
    border: none;
    border-radius: 30px;
    color: white;
    font-weight: bold;
    margin: 2em 0;
    cursor: pointer;
`
// also rename them a bit
const H1 = styled.h1`
    font-weight: bolder;
    font-size: 18px;
    color: red;

`