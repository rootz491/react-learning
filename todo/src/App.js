import React, { useState } from "react";
import shortid from "shortid";
import styled from "styled-components";
import Task from "./components/task";
import { TodoForm } from "./components/addTask";

function App() {
  const [tasks, setTasks] = useState([]);


  const addTask = async e => {
    e.preventDefault();
    setTasks([{
      id: shortid.generate(),
      task: e.target.task.value,
      done: false
    }, ...tasks]);
    e.target.reset();
  }


  const toggleTask = id => {
    setTasks(
      tasks.map(task => {
        console.log()
        if (task.id === id) {
          console.log(task);
          return {
            id,
            task: task.task,
            done: !(task.done)
          };
        }
        else
          return task;
      })
    )
  }

  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  }


  return (
    <Container className="App">
      <H1>Rootz ToDo</H1>

      <TodoForm addTask={addTask} />

      <Menu>

        <ListTasks key="1">
            <h2>pending tasks</h2>
            {tasks.map((taskObj) => 
                !taskObj.done ?
                  <Task taskObj={taskObj} delete={() => deleteTask(taskObj.id)} toggle={() => toggleTask(taskObj.id)} />
                : null
            )}
        </ListTasks>
        
        <ListTasks key="2">
            <h2>completed tasks</h2>
            {tasks.map((taskObj) => 
                taskObj.done ?
                  <Task taskObj={taskObj} delete={() => deleteTask(taskObj.id)} toggle={() => toggleTask(taskObj.id)} />
                : null
            )}
        </ListTasks>


      </Menu>
      
    </Container>
  );
}

export default App;

const Container = styled.div`
  box-sizing: border-box;
  width: 70%;
  margin: auto;
  height: 90vh;
  background-color: #ccc;
`;

const H1 = styled.h1`
  text-align: center;
  color: blue;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-around;
`;

const ListTasks = styled.div`
    width: 40%;
`;
