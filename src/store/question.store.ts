import { Action } from '@reduxjs/toolkit';

// const initialState = {
//   questions: [],
// };

export function questionReducer(state: any, action: Action) {
  if (action.type === 'fetchQuestions') {
    return {
      ...state,
      value: state.questions || [],
    };
  }

  return null;
}
