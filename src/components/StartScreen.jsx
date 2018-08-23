import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from './Button';

const Title = styled.h2`
  font-size: 48px;
  text-align: center;
  margin: 15px 0;
`;

const Message = styled.p`
  text-align: center;
  width: 70%;
  margin: 0 auto;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  margin-top: 80px;
  text-align: center;
`;

const StartScreen = ({ start }) => (
  <Fragment>
    <Title>Пройдите тест</Title>
    <Message>
      К сожалению, ни кто из нас не застрахован от разных заболеваний, в том числе и рака. Столь
      серьёзная патология, как правило, развивается постепенно и не заметно для больного. Но всё же
      онкология, в независимости от локализации опухоли имеет довольно много общих, специфических и
      не специфических признаков, на которые следует обратить внимание. Представленный тест не может
      дать ответ есть ли рак в организме или нет, но его результат может стать сигналом для
      обращения к специалисту.
    </Message>
    <ButtonWrapper>
      <Button onClick={start}>Пройдите тест</Button>
    </ButtonWrapper>
  </Fragment>
);

StartScreen.propTypes = {
  start: PropTypes.func.isRequired,
};

export default StartScreen;
