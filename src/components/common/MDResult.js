import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Button } from 'react-bootstrap';
import './style.css';
import { calculateScore } from '../actions';

class MDResult extends Component {
  state = {
    hideResult: true
  };

  onCalculate() {

    var aValue = this.props.age > 40 ? 1 : 0;
    var gValue = this.props.gender === "male" ? 1 : 0;
    var hValue = this.props.height > 160 ? 1 : 0;
    var wValue = this.props.weight > 60 ? 1 : 0;
    var cValue = this.props.creatinine > .7 ? 1 : 0;

    this.props.calculateScore(aValue + gValue + hValue + wValue + cValue);

    this.setState({
      hideResult: false
    })
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
        <div className={this.state.hideResult ? "hidden" : ""}>
          Result: {this.props.score}, {this.props.severity}
        </div>
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
    severity: state.profile.severity
  };
};

export default connect(mapStateToProps, {calculateScore}) (MDResult);
