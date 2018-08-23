import React from 'react';
import PropTypes from 'prop-types';
import AnswerOptionContainer from '../containers/AnswerOptionContainer';

const Question = ({ questionIndex, text, answers }) => {
  const n = 0;
  return (
    <div>
      <h2 className="question">{text}</h2>
      <ul className="answerOptions">
        {answers.map((answer, index) => (
          <AnswerOptionContainer {...answer} group={questionIndex} key={index} />
        ))}
      </ul>
    </div>
  );
};

Question.propTypes = {
  text: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(PropTypes.shape()),
};

export default Question;
