import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectAnswerOption } from '../store/actions';
import AnswerOption from '../components/AnswerOption';

class AnswerOptionContainer extends Component {
  state = {
    selected: null,
  };

  setAnswerOption = e => {
    console.log(e.target.value);
    this.setState({ selected: e.target.id });
  };

  render() {
    return <AnswerOption {...this.props} {...this.state} setAnswerOption={this.setAnswerOption} />;
  }
}

export default connect(
  null,
  dispatch => ({ handleSelectAnswerOption: e => dispatch(selectAnswerOption(e.target.value)) }),
)(AnswerOptionContainer);
