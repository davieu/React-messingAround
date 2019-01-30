import React from 'react';

const userInput = (props) => {
    return (
        <div className='userInput'>
            <input type="text" placeholder="Change username" onChange={props.changedName} value={props.name}/>
            <input type="text" placeholder="What's on your mind?" onChange={props.changedStatus} />
        </div>
    )
}

export default userInput;