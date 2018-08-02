import React from 'react';
import PropTypes from 'prop-types';

import AnswerOptionContainer from '../containers/AnswerOptionContainer';

const Question = ({ text, answers }) => (
  <div>
    <h2 className="question">{text}</h2>
    <ul className="answerOptions">
      {answers.map((answer, index) => <AnswerOptionContainer {...answer} key={index} />)}
    </ul>
  </div>
);

Question.propTypes = {
  text: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(PropTypes.shape()),
};

export default Question;
