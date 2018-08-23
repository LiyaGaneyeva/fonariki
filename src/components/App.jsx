import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StartScreenContainer from '../containers/StartScreenContainer';
import QuizScreenContainer from '../containers/QuizScreenContainer';
import VerificationScreenContainer from '../containers/VerificationScreenContainer';

const Wrapper = styled.div`
  padding: 80px 1em 100px;
  height: 300px;
  background-color: #ffffff;
  color: #000000;
  text-align: center;
  position: relative;
`;

const App = ({ stage }) => (
  <Wrapper>
    {stage === 1 && <StartScreenContainer />}
    {stage === 2 && <QuizScreenContainer />}
    {stage === 3 && <VerificationScreenContainer />}
  </Wrapper>
);

App.propTypes = {
  stage: PropTypes.number.isRequired,
};

export default App;
