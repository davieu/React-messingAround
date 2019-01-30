import React from 'react';

const userOutput = (props) => {
    return (
        <div className="userOutput">
            <p>Username: {props.name}</p>
            <p>Status: {props.status}</p>
        </div>
    )
}

export default userOutput