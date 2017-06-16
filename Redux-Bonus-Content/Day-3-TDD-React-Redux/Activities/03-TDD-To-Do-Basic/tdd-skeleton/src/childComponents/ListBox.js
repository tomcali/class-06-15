import React, { Component } from 'react';
import '../App.css';
import ListItem from './ListItem.js';
import InputBar from './InputBar.js'

class ListBox extends Component{

    constructor(props){
        super(props);
        this.state = {
            todoList:[{task:'Live Long',completed:false},{task:'Prosper',completed:false},{task:'???',completed:true},{task:'PROFIT!',completed:false}],
            toggleClick:(taskIndex)=>{
                console.log(taskIndex);
                console.log("TASK! Y U NO CHANGE COLOR??");
            },
            clearTasks:()=>{
                console.log("we need to clear tasks... :( ");
            },
            addNewTask:(taskText)=>{
               console.log(`${taskText} needs to be added to our list still...`);
            }
        };    
    };
    render(){
        return(
            <div className="listbox theme-color-alt flex-container-col flex-center-children">
                <h3>My To Do List</h3>
                {this.state.todoList.map((item,index)=>{
                    return <ListItem task={item.task} completed={item.completed} handleClick={this.state.toggleClick} key={index} taskIndex={index}/>
                })}
                <InputBar addTask={this.state.addNewTask} clearTasks={this.state.clearTasks}/>
            </div>
        )
    }
};

export default ListBox;
