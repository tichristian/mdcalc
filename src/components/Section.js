import React from 'react';
import './style.css';

const Section = (props) => {
  return (
    <div className="section">
     {props.children}
    </div>
  );
};

export {Section}
