import React from 'react';
import './style.css';

const ResultMessage = (props) => {
  return (
    <div
      className="result-message"
      style={{display: props.showResult ? "block": "none"}}
    >
      Result: score {props.resultScore}, {props.resultSeverity}
    </div>
  );
};

export { ResultMessage };
