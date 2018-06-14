import { GO_TO_NEXT_STAGE } from './actions';

const initialState = {
  stage: 0,
  counter: 0,
  questionId: 1,
  question: '',
  answerOptions: [],
  answer: '',
  answersCount: {
    nintendo: 0,
    microsoft: 0,
    sony: 0,
  },
  result: '',
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GO_TO_NEXT_STAGE:
      return state.stage === 2
        ? { ...initialState }
        : {
            ...state,
            stage: state.stage + 1,
          };
    default:
      return state;
  }
}
