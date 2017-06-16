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
                let newList = [...this.state.todoList];
                if(this.state.todoList[taskIndex].completed===true){
                    newList[taskIndex].completed=false;
                    this.setState({todoList:newList});
                }else{
                    newList[taskIndex].completed=true;
                    this.setState({todoList:newList});
                }
            },
            clearTasks:()=>{
                let newList = [...this.state.todoList];
                this.setState({todoList:newList.filter(task=>task.completed===false)}
                )
            },
            addNewTask:(taskText)=>{
                if(taskText!==''){
                    let newList = [...this.state.todoList];
                    newList.push({task:`${taskText}`,completed:false});
                    this.setState({todoList:newList});
                }
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
