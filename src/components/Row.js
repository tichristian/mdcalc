import React from 'react';
import './style.css';

const Row = (props) => {
  return (
    <div className="row">
      {props.children}
    </div>
  );
};

export {Row}
