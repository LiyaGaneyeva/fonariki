import React from 'react';
import AnswerOptionContainer from '../containers/AnswerOptionContainer';

const Question = ({ text, answers }) => (
  <div>
    <h2 className="question">{text}</h2>
    <ul className="answerOptions">
      {answers.map((answer, index) => <AnswerOptionContainer {...answer} key={index} />)}
    </ul>
  </div>
);

export default Question;
