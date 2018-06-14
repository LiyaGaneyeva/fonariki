import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from './Button';

const Title = styled.h1``;

const Message = styled.p``;

const StartScreen = ({ start }) => (
  <Fragment>
    <Title>Какая ты принцесса?</Title>
    <Message>Пройди тест и узнай какая ты принцесса</Message>
    <Button onClick={start}>Начать</Button>
  </Fragment>
);

StartScreen.propTypes = {
  start: PropTypes.func.isRequired,
  denyNextStage: PropTypes.bool.isRequired,
};

export default StartScreen;
