import React from 'react';
import './style.css';
const ListMessage = (props) => {
  return (
    <div className="message">
      <ul>
        {
          props.messageList.map(item => (
            <li key={item}>{item}</li>
          ))
        }
      </ul>
    </div>
  );
};

export { ListMessage };
