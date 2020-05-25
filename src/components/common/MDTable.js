import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MDInput } from './MDInput';
import { Row, Container, Col, ButtonToolbar, Button } from 'react-bootstrap';
import './style.css';
import {
  genderChanged,
  ageChanged,
  heightChanged,
  weightChanged,
  creatinineChanged,
} from '../actions';
import GLOBALS from '../../globals';

class MDTable extends Component {
  componentDidMount(){
    this.getGenderAge();
    this.getHeight();
    this.getWeight();
  }

  getGenderAge(){
    axios.get(GLOBALS.URL_SEX_AGE)
      .then(response => {
        const data = response.data;
        this.props.ageChanged(this.calculate_age(data.birthDate))
        this.props.genderChanged(data.gender);
    })
    .catch(error => {
      console.log(error);
    });
  }

  getHeight(){
    axios.get(GLOBALS.URL_HEIGHT)
      .then(response => {
        const data = response.data;

        // todo:
        // this filter should be done in api call, for I am not guarranteed
        // the latest is the first one
        const height = data.entry[0].resource.valueQuantity.value
        this.props.heightChanged(height)
    })
    .catch(error => {
      console.log(error);
    });
  }

  getWeight(){
    axios.get(GLOBALS.URL_WEIGHT)
      .then(response => {
        const data = response.data;

        // todo:
        // this filter should be done in api call, for I am not guarranteed
        // the latest is the first one
        const weight = data.entry[0].resource.valueQuantity.value
        this.props.weightChanged(weight)
    })
    .catch(error => {
      console.log(error);
    });
  }

  calculate_age(dob) {
    const birthDate = new Date(dob);
    const difference = Date.now() - birthDate.getTime();
    const age = new Date(difference);

    return Math.abs(age.getUTCFullYear() - 1970);
  }

  onAgeChange(event) {
    this.props.ageChanged(event.target.value);
  }

  onHeightChange(event){
    this.props.heightChanged(event.target.value);
  }

  onWeightChange(event){
    this.props.weightChanged(event.target.value);
  }

  onCreatinineChange(event){
    this.props.creatinineChanged(event.target.value);
  }

  onFemale() {
    this.props.genderChanged('female');
  }

  onMale() {
    this.props.genderChanged('male');
  }

  render () {
    return (
      <Container className="container">
        <Row>
          <Col>Sex</Col>
          <Col>
            <ButtonToolbar /* todo: set a default active*/>
              <Button
                className="m-1"
                active={this.props.gender === 'female'}
                onClick={this.onFemale.bind(this)}
              >
                Female
              </Button>
              <Button
                className="m-1"
                active={this.props.gender === "male"}
                onClick={this.onMale.bind(this)}
              >
                Male
              </Button>
            </ButtonToolbar>
          </Col>
        </Row>

        <Row>
          <Col>Age</Col>
          <Col>
            <MDInput
              inputValue={this.props.age}
              bindedFunction={this.onAgeChange.bind(this)}
            >
              years
            </MDInput>
          </Col>
        </Row>

        <Row>
          <Col>Weight</Col>
          <Col>
            <MDInput
              inputValue={this.props.weight}
              bindedFunction={this.onWeightChange.bind(this)}
            >
             kg
           </MDInput>
          </Col>
        </Row>

        <Row>
          <Col>Creatinine</Col>
          <Col>
            <MDInput
              inputValue={this.props.creatinine}
              bindedFunction={this.onCreatinineChange.bind(this)}
            >
              mg/dL
            </MDInput>
          </Col>
        </Row>

        <Row>
          <Col>Height</Col>
          <Col>
            <MDInput
              inputValue={this.props.height}
              bindedFunction={this.onHeightChange.bind(this)}
            >
              cm
            </MDInput>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    gender: state.profile.gender,
    age: state.profile.age,
    weight: state.profile.weight,
    height: state.profile.height,
    creatinine: state.profile.creatinine
  };
};

export default connect(mapStateToProps, {
  genderChanged,
  ageChanged,
  heightChanged,
  weightChanged,
  creatinineChanged
}) (MDTable);
