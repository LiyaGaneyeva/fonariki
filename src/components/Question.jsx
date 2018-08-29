import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AnswerOptionContainer from '../containers/AnswerOptionContainer';

const QuestionTitle = styled.h2`
  @media (max-width: 480px) {
    font-size: 22px;
  }
`;

const Question = ({ questionIndex, text, answers }) => (
  <div>
    <QuestionTitle>{text}</QuestionTitle>
    <ul className="answerOptions">
      {answers.map((answer, index) => (
        <AnswerOptionContainer {...answer} group={questionIndex} key={index} />
      ))}
    </ul>
  </div>
);

Question.propTypes = {
  text: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(PropTypes.shape()),
};

export default Question;
