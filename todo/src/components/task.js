import React from "react";
import styled from "styled-components";




const Task = props => {
    return (
        <Tsk
            style={{textDecoration: props.taskObj.done?"line-through":null}}
            key={props.taskObj.id}
        >
            <p onClick={props.toggle}>{props.taskObj.task}</p>
            <Btn onClick={props.delete}>❌</Btn>
        </Tsk>
    );
};

export default Task;


const Tsk = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: green;
    background: lightgrey;
    margin: 10px 4px;
    padding: 3px 7px;
    cursor: pointer;
`;

const Btn = styled.button`
    background-color: none;
    outline: none;
    cursor: pointer;
`;