import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Button } from 'react-bootstrap';
import './style.css';
import { calculateScore } from '../actions';
import { ErrorMessage, ResultMessage } from '../common'

class MDResult extends Component {
  state = {
    showResult: false,
    showError: false
  };

  onCalculate() {

    if(!this.props.ageError &&
      !this.props.heightError &&
      !this.props.weightError &&
      !this.props.creatinineError){

        this.calculate();
        this.setState({
          showResult: true,
          showError: false,
        });
      }
    else {
      this.setState({
        showResult: false,
        showError: true,
      });
    }
  }

  calculate() {
    var aValue = this.props.age > 40 ? 1 : 0;
    var gValue = this.props.gender === "male" ? 1 : 0;
    var hValue = this.props.height > 160 ? 1 : 0;
    var wValue = this.props.weight > 60 ? 1 : 0;
    var cValue = this.props.creatinine > .7 ? 1 : 0;

    this.props.calculateScore(aValue + gValue + hValue + wValue + cValue);
  }

  render () {
    return (
      <Container>
        <Button
          className="button"
          onClick={this.onCalculate.bind(this)}
        >
          Calculate
        </Button>
        <ResultMessage
          showResult={this.state.showResult}
          resultScore={this.props.score}
          resultSeverity={this.props.severity}
        />
        <ErrorMessage
          errorDisplay={this.state.showError}
          errorMessage="Input(s) are incorrect, please check and recalculate"
        />
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    gender: state.profile.gender,
    age: state.profile.age,
    weight: state.profile.weight,
    height: state.profile.height,
    creatinine: state.profile.creatinine,
    score: state.profile.score,
    severity: state.profile.severity,

    // errors
    ageError: state.inputError.ageError,
    weightError: state.inputError.weightError,
    heightError: state.inputError.heightError,
    creatinineError: state.inputError.creatinineError
  };
};

export default connect(mapStateToProps, {calculateScore}) (MDResult);
