import React, { Component } from 'react';
import './UserInput.css'

const UserInput = props =>{
        return(
            <div className="UserInput">
                <input onChange={props.change}/>
            </div>
        );
}

export default UserInput;