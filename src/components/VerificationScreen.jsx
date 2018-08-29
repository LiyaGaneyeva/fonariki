import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from './Button';

const StyledButton = styled(Button)`
  width: 200px;
`;

const InfoText = styled.p`
  max-width: 80%;
  margin: 40px auto;
  font-size: 20px;
  @media (max-width: 480px) {
    max-width: 100%;
    font-size: 16px;
  }
`;

const VerificationScreen = ({ counter, reset }) => (
  <Fragment>
    {counter >= 40 && (
      <Fragment>
        <h1>Волноваться не стоит</h1>
        <InfoText>
          Видимых признаков рака у вас нет, но помните, что плановые посещения врачей помогут Вам
          обнаружить бессимптомное течение рака (такое тоже бывает). Берегите здоровье и живите
          долго.
        </InfoText>
      </Fragment>
    )}
    {counter >= 30 &&
      counter < 40 && (
        <Fragment>
          <h1>Подумайте о визите к специалисту</h1>
          <InfoText>
            В ваших ответах есть "тревожные звоночки". Возможно Ваше состояние не связано с
            онкологическим диагнозом, однако есть повод обратиться к врачу и пройти скрининг.
          </InfoText>
        </Fragment>
      )}
    {counter < 30 && (
      <Fragment>
        <h1>Вам следует не откладывать визит к специалисту</h1>
        <InfoText>
          Многие симптомы являются прямыми признаками наличия злокачественной опухоли в организме.
          Но, не забывайте, что подобные проявления могут быть проявлениями и других заболеваний. В
          любом случае вам необходимо пройти полное обследование организма.
        </InfoText>
      </Fragment>
    )}
    <StyledButton onClick={reset}>Пройти еще раз</StyledButton>
  </Fragment>
);

VerificationScreen.propTypes = {
  counter: PropTypes.number.isRequired,
  reset: PropTypes.func.isRequired,
};

export default VerificationScreen;
