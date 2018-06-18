import React from 'react';
import { connect } from 'react-redux';
import { selectAnswerOption } from '../store/actions';
import AnswerOption from '../components/AnswerOption';

export default connect(
  null,
  dispatch => ({ handleSelectAnswerOption: e => dispatch(selectAnswerOption(e.target.value)) }),
)(AnswerOption);
