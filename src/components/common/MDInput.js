import React from 'react';
import {InputGroup, FormControl} from 'react-bootstrap';

const MDInput = (props) => {
  return (
    <InputGroup>
      <FormControl
        type="text"
        defaultValue={props.inputValue}
        onChange={props.bindedFunction}
      />
      <InputGroup.Prepend>
        <InputGroup.Text>{props.children}</InputGroup.Text>
      </InputGroup.Prepend>
    </InputGroup>
  );
};

export { MDInput };
