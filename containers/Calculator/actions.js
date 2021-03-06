import {
  ADD_SYMBOL,
  OPERATOR,
  CLEAR,
  EQUALS,
  BACK,
  TOGGLE_SIGN,
} from './constants';

export const symbolClick = symbol => ({
  type: ADD_SYMBOL,
  payload: {
    symbol,
  },
});

export const operatorClick = operator => ({
  type: OPERATOR,
  payload: {
    operator,
  },
});

export const clear = () => ({
  type: CLEAR,
});

export const equals = () => ({
  type: EQUALS,
});

export const back = () => ({
  type: BACK,
});

export const signToggle = () => ({
  type: TOGGLE_SIGN,
});
