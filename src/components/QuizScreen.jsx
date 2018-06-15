import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import QuestionContainer from '../containers/QuestionContainer';
import QuestionCount from '../components/QuestionCount';
import { QUESTION_TOTAL } from '../constants';

const QuizScreen = ({ questionIndex, goToNextStage, goToNextQuestion }) => (
  <Fragment>
    <div className="quiz">
      <QuestionCount counter={questionIndex + 1} total={QUESTION_TOTAL} />
      <QuestionContainer />
    </div>
    {questionIndex + 1 < QUESTION_TOTAL ? (
      <Button onClick={goToNextQuestion}>Далее</Button>
    ) : (
      <Button onClick={goToNextStage}>Завершить</Button>
    )}
  </Fragment>
);

QuizScreen.propTypes = {
  questionIndex: PropTypes.number.isRequired,
  goToNextStage: PropTypes.func.isRequired,
  goToNextQuestion: PropTypes.func.isRequired,
};

export default QuizScreen;
