import React from 'react';
import PropTypes from 'prop-types';

const AnswerOption = ({ text, value, handleSelectAnswerOption }) => (
  <li className="answerOption">
    <input
      type="radio"
      className="radioCustomButton"
      name="radioGroup"
      value={value}
      onChange={handleSelectAnswerOption}
    />
    <label className="radioCustomLabel">
      {text}
    </label>
  </li>
);

AnswerOption.propTypes = {
    text: PropTypes.string,
    value: PropTypes.number,
    handleSelectAnswerOption: PropTypes.func.isRequired,
};

export default AnswerOption;
