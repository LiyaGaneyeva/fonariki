import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from './Button';
import QuestionContainer from '../containers/QuestionContainer';
import QuestionCount from '../components/QuestionCount';
import { QUESTION_TOTAL } from '../constants';

const Wrapper = styled.div`
  display: inline-block;
  margin: 0px auto;
  width: 60%;
  text-align: left;
`;

const Quiz = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const ButtonWrapper = styled.div`
  text-align: center;
  position: absolute;
  bottom: 50px;
  left: calc(50% - 180px / 2);
`;

const QuizScreen = ({ questionIndex, goToNextStage, goToNextQuestion }) => (
  <Wrapper>
    <Quiz>
      <QuestionCount counter={questionIndex + 1} total={QUESTION_TOTAL} />
      <QuestionContainer questionIndex={questionIndex} />
    </Quiz>
    <ButtonWrapper>
      {questionIndex + 1 < QUESTION_TOTAL ? (
        <Button onClick={goToNextQuestion}>Далее</Button>
      ) : (
        <Button onClick={goToNextStage}>Завершить</Button>
      )}
    </ButtonWrapper>
  </Wrapper>
);

QuizScreen.propTypes = {
  questionIndex: PropTypes.number.isRequired,
  goToNextStage: PropTypes.func.isRequired,
  goToNextQuestion: PropTypes.func.isRequired,
};

export default QuizScreen;
