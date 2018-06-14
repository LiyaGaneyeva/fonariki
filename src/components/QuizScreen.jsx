import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Question from '../components/Question';
import QuestionCount from '../components/QuestionCount';
import AnswerOption from '../components/AnswerOption';
import { QUESTION_TOTAL } from '../constants';

const QuizScreen = ({ questionId, answerOptions, question, goToNextStage }) => (
  <Fragment>
    <div className="quiz">
      <QuestionCount counter={questionId} total={QUESTION_TOTAL} />
      <Question content={question} />
      <ul className="answerOptions">
        {answerOptions.map(answer => (
          <AnswerOption key={answer.id} answer={answer.content} questionId={questionId} />
        ))}
      </ul>
    </div>
    <Button onClick={goToNextStage}>Далее</Button>
  </Fragment>
);

QuizScreen.propTypes = {
  goToNextStage: PropTypes.func.isRequired,
  timeout: PropTypes.number.isRequired,
  digits: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default QuizScreen;
