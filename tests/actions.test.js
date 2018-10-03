import * as actions from '../containers/Calculator/actions';
import * as types from '../containers/Calculator/constants';

describe('actions', () => {
  it('should create an action to add symbol 5 to current number', () => {
    const expectedAction = {
      type: types.ADD_SYMBOL,
      payload: {
        symbol: '5',
      },
    };
    expect(actions.symbolClick('5')).toEqual(expectedAction);
  });

  it('should create an action to set "+" operator', () => {
    const expectedAction = {
      type: types.OPERATOR,
      payload: {
        operator: '+',
      },
    };
    expect(actions.operatorClick('+')).toEqual(expectedAction);
  });

  it('should create an action to clear the current and saved numbers', () => {
    const expectedAction = {
      type: types.CLEAR,
    };
    expect(actions.clear()).toEqual(expectedAction);
  });

  it('should create an action to set current number to calculated result', () => {
    const expectedAction = {
      type: types.EQUALS,
    };
    expect(actions.equals()).toEqual(expectedAction);
  });

  it('should create an action to erase last entered symbol', () => {
    const expectedAction = {
      type: types.BACK,
    };
    expect(actions.back()).toEqual(expectedAction);
  });

  it('should create an action to change the sign of current number', () => {
    const expectedAction = {
      type: types.TOGGLE_SIGN,
    };
    expect(actions.signToggle()).toEqual(expectedAction);
  });
});
