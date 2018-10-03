import configureMockStore from 'redux-mock-store';
import reducer from '../containers/Calculator/reducer';
import * as actions from '../containers/Calculator/actions';

const mockStore = configureMockStore();

const calculatorTester = (state, action) => {
  const store = mockStore(state);
  store.dispatch(action);
  return reducer(state, store.getActions()[0]);
};

const initialState = {
  savedNumber: null,
  currentNumber: '0',
  operator: null,
  enter: false,
};

describe('Calculator reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  let state = calculatorTester(initialState, actions.symbolClick('5'));

  it('should handle ADD_SYMBOL', () => {
    expect(state.currentNumber).toEqual('5');
    expect(state.enter).toEqual(true);

    state = calculatorTester(state, actions.symbolClick('.'));
    state = calculatorTester(state, actions.symbolClick('8'));

    expect(state.currentNumber).toEqual('5.8');
    expect(state.enter).toEqual(true);
  });

  it('should handle OPERATOR', () => {
    state = calculatorTester(state, actions.operatorClick('+'));

    expect(state.savedNumber).toEqual('5.8');
    expect(state.currentNumber).toEqual('0');
    expect(state.operator).toEqual('+');
  });

  it('should handle TOGGLE_SIGN', () => {
    state = calculatorTester(state, actions.symbolClick('4'));
    state = calculatorTester(state, actions.symbolClick('6'));
    state = calculatorTester(state, actions.signToggle());

    expect(state.currentNumber).toEqual('-46');
  });

  it('should handle BACK', () => {
    state = calculatorTester(state, actions.back());

    expect(state.currentNumber).toEqual('-4');

    state = calculatorTester(state, actions.back());

    expect(state.currentNumber).toEqual('0');
  });

  it('should handle EQUALS', () => {
    state = calculatorTester(state, actions.symbolClick('4'));
    state = calculatorTester(state, actions.symbolClick('6'));

    expect(state.currentNumber).toEqual('46');

    state = calculatorTester(state, actions.equals());

    expect(state.currentNumber).toEqual('51.8');
  });

  it('should handle CLEAR', () => {
    state = calculatorTester(state, actions.symbolClick('4'));
    state = calculatorTester(state, actions.symbolClick('6'));
    state = calculatorTester(state, actions.operatorClick('+'));
    state = calculatorTester(state, actions.symbolClick('9'));
    state = calculatorTester(state, actions.symbolClick('6'));

    expect(state.currentNumber).toEqual('96');
    expect(state.savedNumber).toEqual('46');
    expect(state.enter).toEqual(true);

    state = calculatorTester(state, actions.clear());

    expect(state.currentNumber).toEqual('0');
    expect(state.savedNumber).toEqual(null);
    expect(state.enter).toEqual(false);
  });

  it('should limit number of digits to ten', () => {
    for (let i = 0; i < 10; i += 1) {
      state = calculatorTester(state, actions.symbolClick('4'));
    }
    expect(state.currentNumber).toEqual('4444444444');
    state = calculatorTester(state, actions.symbolClick('4'));
    expect(state.currentNumber).toEqual('4444444444');
  });
});
