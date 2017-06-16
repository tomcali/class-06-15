import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from 'enzyme';
import ListBox from './childComponents/ListBox.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('is easy to use and behaves similarly to mocha/chai',()=>{
    expect(true).toEqual(true);
});

it('imports ListBox state correctly',()=>{
    let wrapper = shallow(<ListBox/>);
    expect(wrapper.instance().state).toHaveProperty('todoList');
});

it('can toggle completion status of tasks',()=>{
    let wrapper = shallow(<ListBox/>);
    wrapper.instance().state.todoList[0].completed=false;
    wrapper.instance().state.toggleClick(0);
    expect(wrapper.instance().state.todoList[0].completed).toBe(true);
});

it('clears completed tasks from todo list',()=>{
   let wrapper = shallow(<ListBox/>);
   wrapper.instance().state.clearTasks();
   let clearedList = wrapper.instance().state.todoList;
   let oldTasksCleared = clearedList.every((task)=>{
    return task.completed===false;
   });
   expect(oldTasksCleared).toBe(true);
});

it('adds a new task to the list',()=>{
    let wrapper = shallow(<ListBox/>);
    let orgNumOfTasks = wrapper.instance().state.todoList.length;
    wrapper.instance().state.addNewTask('learn how to use enzyme and jest');
    expect(wrapper.instance().state.todoList.length).toBeGreaterThan(orgNumOfTasks);
});
