import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>UserID: {props.staticUserID}</p>
            <p>Username: {props.name}</p>
            <p>Status: {props.status}</p>
        </div>
    )
}

export default userOutput