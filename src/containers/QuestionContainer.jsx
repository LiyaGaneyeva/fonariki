import React from 'react';
import { connect } from 'react-redux';
import Question from '../components/Question';

export default connect(state => state.questions[state.questionIndex])(Question);
