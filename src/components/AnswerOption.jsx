import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const WrapperListItem = styled.li`
  list-style: none;
  font-size: 18px;
  margin: 10px 0;
`;

const RadioCustomLabel = styled.label`
  padding-left: 5px;
`;

const AnswerOption = ({
  text,
  value,
  group,
  handleSelectAnswerOption,
  setAnswerOption,
  selected,
}) => (
  <WrapperListItem>
    <input
      type="radio"
      id={group + text + value}
      name={group}
      value={value}
      onChange={e => {
        handleSelectAnswerOption(e);
        setAnswerOption(e);
      }}
      checked={selected === group + text + value}
    />
    <RadioCustomLabel>{text}</RadioCustomLabel>
  </WrapperListItem>
);

AnswerOption.propTypes = {
  text: PropTypes.string,
  value: PropTypes.number,
  handleSelectAnswerOption: PropTypes.func.isRequired,
};

export default AnswerOption;
