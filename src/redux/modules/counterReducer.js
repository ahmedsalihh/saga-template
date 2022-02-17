import {
  DECREASE_COUNTER_ACTION,
  INCREASE_COUNTER_ACTION,
  INCREASE_VALUE_ACTION,
} from '../types/counterActionTypes';

const defaultState = {
  counter: 0,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  switch (action.type) {
    case INCREASE_COUNTER_ACTION:
      return { ...state, counter: state.counter + 1 };
    case DECREASE_COUNTER_ACTION:
      return { ...state, counter: state.counter - 1 };
    case INCREASE_VALUE_ACTION:
      return { ...state, counter: state.counter + action.inputValue };
    default:
      return state;
  }
};
