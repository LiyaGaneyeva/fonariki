import React from 'react';
import PropTypes from 'prop-types';

const QuestionCount = ({ counter, total }) => (
  <div className="questionCount">
    Вопрос <span>{counter}</span> из <span>{total}</span>
  </div>
);

QuestionCount.propTypes = {
  counter: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default QuestionCount;
