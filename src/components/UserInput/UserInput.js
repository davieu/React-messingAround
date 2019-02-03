import React from 'react';

const userInput = (props) => {
    const inputStyle = {
        border: '2px solid red'
    };

    return (
        <div className='userInput'>
            <input 
            type="text" 
            style={inputStyle}
            placeholder="Change username" 
            onChange={props.changedName} 
            value={props.name}/>

            <input 
            type="text" 
            placeholder="What's on your mind?" 
            onChange={props.changedStatus} 
            value={props.status}/>
        </div>
    )
}

export default userInput;