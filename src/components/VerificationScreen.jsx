import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const VerificationScreen = ({ counter, reset }) => (
  <Fragment>
    <h2>{counter}</h2>
    {counter <= 5 && <h2>Ты рапунцель</h2>}
    {counter <= 10 && counter > 5 && <h2>Ты золушка</h2>}
    {counter > 10 && <h2>Ты снежная королева</h2>}
    <Button onClick={reset}>Пройти еще раз</Button>
  </Fragment>
);

VerificationScreen.propTypes = {
    counter: PropTypes.number.isRequired,
    reset: PropTypes.func.isRequired,
};

export default VerificationScreen;
