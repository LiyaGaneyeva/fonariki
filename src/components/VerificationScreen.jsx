import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Button from './Button';

const VerificationScreen = ({ reset }) => <Button onClick={reset}>Ок</Button>;

VerificationScreen.propTypes = {};

export default VerificationScreen;
