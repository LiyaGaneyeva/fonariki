import React from 'react';
import { connect } from 'react-redux';
import { goToNextQuestion, goToNextStage } from '../store/actions';
import QuizScreen from '../components/QuizScreen';

export default connect(
  state => ({
    questionIndex: state.questionIndex,
  }),
  {
    goToNextQuestion,
    goToNextStage,
  },
)(QuizScreen);
