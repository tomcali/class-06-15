import React from 'react';
import '../App.css';

const InputBar = (props)=>{

let newTaskValue='';
let grabValue=(e)=>{
    newTaskValue = e.target.value;
};

    return(
        <div className="inputBar flex-container-row">
            <button onClick={()=>{props.addTask(newTaskValue)}}>Add New Task</button>
            <input type="text" placeholder="Write unit tests for my components" onKeyUp={(e)=>{grabValue(e)}}></input>
            <button className="taskItemComplete" onClick={props.clearTasks}>Clear Completed Tasks</button>
        </div>
    )
};

export default InputBar;