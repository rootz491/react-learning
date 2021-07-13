import React from "react";
import styled from "styled-components";



export const TodoForm = props => {
    

    return (
        <Form method="POST" onSubmit={props.addTask}>
            <Input placeholder="Enter the Task" name="task" required />
            <Button type="submit">add task</Button>
        </Form>
    );
}



const Form = styled.form`
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  padding: 8px 15px;
  margin: 0 4px;
  width: 50%;
`;

const Button = styled.button`
  padding: 8px 15px;
  background-color: none;
`;
