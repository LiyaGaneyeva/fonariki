import { GO_TO_NEXT_STAGE, GO_TO_NEXT_QUESTION, SELECT_ANSWER_OPTION } from './actions';
import questions from './data.json';
const initialState = {
  stage: 1,
  counter: 0,
  questionIndex: 0,
  questions,
  selectedAnswerOption: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GO_TO_NEXT_STAGE:
      return state.stage === 3
        ? { ...initialState }
        : {
            ...state,
            counter: state.counter + state.selectedAnswerOption,
            selectedAnswerOption: null,
            stage: state.stage + 1,
          };
    case GO_TO_NEXT_QUESTION:
      return {
        ...state,
        questionIndex: state.questionIndex + 1,
        counter: state.counter + state.selectedAnswerOption,
        selectedAnswerOption: null,
      };
    case SELECT_ANSWER_OPTION:
      console.log('selected');
      return { ...state, selectedAnswerOption: parseInt(action.payload.value, 10) };
    default:
      return state;
  }
}
