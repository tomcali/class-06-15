import React from 'react';
import '../App.css';

const ListItem = (props)=>{

    let statusClass='';
    let buttonMessage='';
    let taskIndex=props.taskIndex;
    if(props.completed===true){
        statusClass='taskItemComplete';
        buttonMessage="Mark As Incomplete";
    }else{
        statusClass='taskItemIncomplete'
        buttonMessage="Mark As Complete";
    };

    return (
        <div className={`taskItem flex-container-row ${statusClass}`}>
            <h5>{props.task}</h5>
            <button onClick={()=>{props.handleClick(taskIndex)}}>{`${buttonMessage}`}</button>
        </div>
    )
};

export default ListItem;