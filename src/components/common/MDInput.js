import React from 'react';
import {InputGroup, FormControl} from 'react-bootstrap';
import { ErrorMessage } from '../common';

const MDInput = (props) => {
  return (
    <div>
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
      <ErrorMessage
          errorDisplay={props.errorDisplay}
          errorMessage={props.errorMessage}
      />
    </div>
  );
};

export { MDInput };
