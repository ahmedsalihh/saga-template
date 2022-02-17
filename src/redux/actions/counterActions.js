import {
  DECREASE_COUNTER_ACTION,
  INCREASE_COUNTER_ACTION,
  INCREASE_COUNTER_ACTION_ASYNC,
  INCREASE_VALUE_ACTION,
} from '../types/counterActionTypes';

export const increaseCounter = () => {
  return {
    type: INCREASE_COUNTER_ACTION,
  };
};

export const decreaseCounter = () => {
  return {
    type: DECREASE_COUNTER_ACTION,
  };
};

export const increaseValue = inputValue => {
  return {
    type: INCREASE_VALUE_ACTION,
    inputValue,
  };
};

export const incrementAsync = () => {
  return {
    type: INCREASE_COUNTER_ACTION_ASYNC,
  };
};
