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

const AnswerOption = ({ text, value, handleSelectAnswerOption, checked }) => (
    <select className="answerOptions"  name={this.props.name} onChange={this.changeValue} value={this.getValue()}>
        {answers.map((answer, index) => <AnswerOptionContainer {...answer} key={index} />)}
    </select>
  <WrapperListItem>
    <input
      type="radio"
      className="radioCustomButton"
      name="radioGroup"
      value={value}
      onChange={handleSelectAnswerOption}
      checked={checked}
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
