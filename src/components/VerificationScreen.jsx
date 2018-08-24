import React, {Fragment} from 'react';
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
`;

const VerificationScreen = ({counter, reset}) => {
    return (
        <Fragment>
            {counter >= 40 && (
                <Fragment>
                    <h1>Волноваться не стоит</h1>
                    <InfoText>Никаких видимых признаков рака у вас нет. Опасаться, причин нет.</InfoText>
                </Fragment>
            )}
            {counter >= 30 &&
            counter < 40 && (
                <Fragment>
                    <h1>Подумайте о визите к специалисту</h1>
                    <InfoText>
                        В ваших ответах есть "тревожные звоночки". Возможно Ваше состояние не связано с онкологическим
                        диагнозом, однако есть повод обратиться к врачу и пройти скрининг.
                    </InfoText>
                </Fragment>
            )}
            {counter < 30 && (
                <Fragment>
                    <h1>Вам следует не откладывать визит к специалисту. </h1>
                    <InfoText>
                        Многие симптомы являются прямыми признаками наличия злокачественной опухоли в организме.<br/>
                        Но, не забывайте, что подобные проявления могут быть проявлениями и других заболеваний.<br/>
                        В любом случае вам необходимо пройти полное обследование организма.
                    </InfoText>
                </Fragment>
            )}
            <StyledButton onClick={reset}>Пройти еще раз</StyledButton>
        </Fragment>
    );
};

VerificationScreen.propTypes = {
    counter: PropTypes.number.isRequired,
    reset: PropTypes.func.isRequired,
};

export default VerificationScreen;
