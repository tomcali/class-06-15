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
