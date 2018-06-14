import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StartScreenContainer from '../containers/StartScreenContainer';
import QuizScreenContainer from '../containers/QuizScreenContainer';
import VerificationScreenContainer from '../containers/VerificationScreenContainer';

const Wrapper = styled.div`
  margin: 1em;
`;

const App = ({ stage }) => (
    <Wrapper>
        {stage === 0 && (
            <StartScreenContainer />
        )}
        {stage === 1 && (
            <QuizScreenContainer />
        )}
        {stage === 2 && (
            <VerificationScreenContainer />
        )}
    </Wrapper>
);

export default App;