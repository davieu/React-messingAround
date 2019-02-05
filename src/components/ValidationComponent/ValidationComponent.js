import React from 'react';

const validationComponent = (props) => {

    return (
        <div>
            <p>{props.input}</p>
            <p>Length: {props.inputLength}</p>
        </div>
    )
}

export default validationComponent;