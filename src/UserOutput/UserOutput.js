import React, { Component } from 'react';

const UserOutput = props =>{
        return(
            <div className="UserOutput" style={props.style} onClick={props.click}>
                <p>Name = {props.name}</p>
                <p> Age = 25</p>
            </div>
        );
}

export default UserOutput;