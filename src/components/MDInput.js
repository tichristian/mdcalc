import React from 'react';
import {InputGroup, FormControl} from 'react-bootstrap';

const MDInput = (props) => {
  return (
    <InputGroup>
      <FormControl
        type="text"
        aria-label={props.mdAriaLabel}
        aria-describedby={props.mdAriaDescribedBy}
      />
      <InputGroup.Prepend>
        <InputGroup.Text id={props.mdId}>{props.children}</InputGroup.Text>
      </InputGroup.Prepend>
    </InputGroup>
  );
};

export {MDInput};
