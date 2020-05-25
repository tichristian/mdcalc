import React, { Component } from 'react';
import { Container, Button, ButtonGroup } from 'react-bootstrap';
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
        <ButtonGroup>
          <Button className="button">when to use</Button>
          <Button className="button">pearls/pitfalls</Button>
        </ButtonGroup>
      </Container>
    )
  }
}

export default AppHeader;
