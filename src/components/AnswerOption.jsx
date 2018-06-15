import React from 'react';

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

export default AnswerOption;
