import React from 'react'

const validationComponent = (props) => {
  return (
    <div>
      <p>From validationComponent-length: {props.length}</p>
      <p>{props.validator}</p>
    </div>
  )
}

export default validationComponent