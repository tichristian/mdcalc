import React, { Component } from 'react';
import { Container, Button, ButtonGroup } from 'react-bootstrap';
import { TitleMessage, ListMessage } from '../common';
import './style.css';
import data from '../data/data.json'

class AppHeader extends Component {

  state = {
    whenToUse: data.whenToUse,
    pearlsPitfaills: data.pearlsPitfaills,
    showWhenToUse: false,
    showPearlsPitfaills: false
  };

  onWhentoUseClick (event) {
    this.setState(prevState => ({
      showWhenToUse: !prevState.showWhenToUse,
      showPearlsPitfaills: false
    }));
  };

  onPittfallsClick (event) {

    this.setState(prevState => ({
      showWhenToUse: false,
      showPearlsPitfaills: !prevState.showPearlsPitfaills
    }));
  };

  render () {
    return (
      <Container>
        <ButtonGroup>
          <Button
            id="whenToUse"
            className="button"
            onClick={this.onWhentoUseClick.bind(this)}
          >
            when to use
          </Button>
          <Button
            id="pearlsPitfaills"
            className="button"
            onClick={this.onPittfallsClick.bind(this)}
          >
            pearls/pitfalls
          </Button>
        </ButtonGroup>

      <div
        className="notice"
        style={{display: this.state.showWhenToUse ? "block" : "none"}}
      >
        <ListMessage messageList={this.state.whenToUse} />
      </div>
      <div
        className="notice"
        style={{display: this.state.showPearlsPitfaills ? "block" : "none"}}
      >
        <TitleMessage
          popTitle={this.state.pearlsPitfaills.title}
          popMessage={this.state.pearlsPitfaills.text}
        />
      </div>
      </Container>
    )
  }
}

export default AppHeader;
