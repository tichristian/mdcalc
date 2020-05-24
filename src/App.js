import React from 'react';
import {MDInput} from './components';
import { Row, Container, Col, ButtonGroup, Button, InputGroup, FormControl } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Container bsStyle="default" className="container">
        <Row>
          <Col>Sex</Col>
          <Col>
            <ButtonGroup>
              <Button>Female</Button>
              <Button>Male</Button>
            </ButtonGroup>
          </Col>
        </Row>
        <Row>
          <Col>Age</Col>
          <Col>
            <MDInput>years</MDInput>
          </Col>
        </Row>
        <Row>
          <Col>Weight</Col>
          <Col>
            <MDInput>kg</MDInput>
          </Col>
        </Row>
        <Row>
          <Col>Creatinine</Col>
          <Col>
            <MDInput>mg/dL</MDInput>
          </Col>
        </Row>
        <Row>
          <Col>Height</Col>
          <Col>
            <MDInput>cm</MDInput>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
