import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goToNextStage } from '../store/actions';
import TestScreen from '../components/QuizScreen';

class QuizScreenContainer extends Component {

  render() {
    return <TestScreen {...this.props}/>;
  }
}

export default connect(goToNextStage)(QuizScreenContainer);
