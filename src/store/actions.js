export const GO_TO_NEXT_STAGE = 'GO_TO_NEXT_STAGE';
export const GO_TO_NEXT_QUESTION = 'GO_TO_NEXT_QUESTION';
export const SELECT_ANSWER_OPTION = 'SELECT_ANSWER_OPTION';

export function goToNextStage() {
  return {
    type: GO_TO_NEXT_STAGE,
  };
}

export function goToNextQuestion() {
  return {
    type: GO_TO_NEXT_QUESTION,
  };
}

export function selectAnswerOption(value) {
  return {
    type: SELECT_ANSWER_OPTION,
    payload: { value }, // flux standart params
  };
}
