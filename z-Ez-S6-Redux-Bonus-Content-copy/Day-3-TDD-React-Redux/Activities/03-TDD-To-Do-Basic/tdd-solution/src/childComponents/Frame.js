import React, { Component } from 'react';
import '../App.css';
import ListBox from './ListBox.js';

class Frame extends Component{
    render(){
        return(
            <div className="full-width flex-container-row flex-center-children theme-color-main frame">
                <ListBox/>
            </div>
        )
    }
};

export default Frame;
