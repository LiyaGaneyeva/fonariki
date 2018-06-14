import React from 'react';

const AnswerOption = ({ answer }) => (
  <li className="answerOption">
    <input
      type="radio"
      className="radioCustomButton"
      name="radioGroup"
      id={answer.id}
      value={answer.content}
    />
    <label className="radioCustomLabel">{answer.content}</label>
  </li>
);

export default AnswerOption;
