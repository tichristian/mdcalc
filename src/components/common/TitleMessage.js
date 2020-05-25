import React from 'react';
import './style.css';

const TitleMessage = (props) => {
  return (
    <div className="message">
      <p><strong>{props.popTitle}</strong></p>
      <p>"{props.popMessage}"</p>
    </div>
  )
};

export { TitleMessage };
