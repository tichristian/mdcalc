import React, { Component } from 'react';
import { Container, Button, ButtonToolbar } from 'react-bootstrap';
import './style.css';
import data from '../data/data.json'

class AppHeader extends Component {

  state = {
    whenToUse: data.whenToUse,
    pitfalls: data.pearlsPitfaills
  };

  componentDidMount (){
    console.log(data);
  };

  render () {
    return (
      <Container className="container">
        <ButtonToolbar>
          <Button className="m-1">when to use</Button>
          <Button className="m-1">pearls/pitfalls</Button>
        </ButtonToolbar>
      </Container>
    )
  }
}

export default AppHeader;
