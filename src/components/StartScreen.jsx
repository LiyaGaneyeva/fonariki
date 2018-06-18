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
      Многие уверены, что чем больше витаминов и микроэлементов содержится в одной таблетке, тем
      лучше. Однако это не так. Дело в том, что максимальное количест­во витаминов хорошо
      усваивается только при наличии минимального количества минералов. И наоборот – микроэлементы
      хорошо усваиваются, если соседствуют рядом с маленькими дозами витаминов.
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
