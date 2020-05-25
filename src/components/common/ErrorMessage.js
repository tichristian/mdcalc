import React from 'react';
import './style.css';

const ErrorMessage = (props) =>{
  return (
    <div
      className="error-message"
      style={{display: props.errorDisplay ? "block": "none"}}
    >
      {props.errorMessage}
    </div>
  );
};

export { ErrorMessage };
