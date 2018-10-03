const defaultState = {
  savedNumber: null,
  currentNumber: '0',
  operator: null,
  enter: false,
};

const formatNumber = (number) => {
  const intPart = `${Math.abs(Math.trunc(number))}`;
  if (intPart.length > 10) {
    return '0';
  }
  if (intPart.length === 10) {
    return intPart;
  }
  return `${parseFloat(number.toFixed(10 - intPart.length))}`;
};

const calculate = (firstArg, secondArg, operator) => {
  const first = parseFloat(firstArg);
  const second = parseFloat(secondArg);
  switch (operator) {
    case '+':
      return formatNumber(first + second);
    case '-':
      return formatNumber(first - second);
    case 'x':
      return formatNumber(first * second);
    case '/':
      return formatNumber(first / second);
    default:
      return '0';
  }
};

const removeDotInTheEnd = (str) => {
  if (str[str.length - 1] === '.') {
    return str.slice(0, str.length - 1);
  }
  return str;
};

const Calculator = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_SYMBOL':
      const newSymbol = action.payload.symbol;
      if (newSymbol !== '.' && (state.currentNumber === '0' || !state.enter)) {
        return {
          ...state,
          currentNumber: newSymbol,
          enter: true,
        };
      }
      if (newSymbol === '.' && !state.enter) {
        return {
          currentNumber: '0.',
          enter: true,
        };
      }
      if (newSymbol === '.' && state.currentNumber.indexOf('.') >= 0) {
        return state;
      }
      const hasDot = (state.currentNumber.indexOf('.') > 0) ? 1 : 0;
      if (state.currentNumber.length - hasDot === 10) {
        return state;
      }
      return {
        ...state,
        enter: true,
        currentNumber: `${state.currentNumber}${newSymbol}`,
      };
    case 'OPERATOR':
      if (!state.enter && state.savedNumber !== null) {
        return {
          ...state,
          operator: action.payload.operator,
        };
      }
      const newSavedNumber = (state.savedNumber === null)
        ? removeDotInTheEnd(state.currentNumber)
        : calculate(state.savedNumber, state.currentNumber, state.operator);
      return {
        ...state,
        savedNumber: newSavedNumber,
        currentNumber: '0',
        operator: action.payload.operator,
        enter: false,
      };
    case 'CLEAR':
      return {
        ...state,
        savedNumber: null,
        currentNumber: '0',
        operator: null,
        enter: false,
      };
    case 'EQUALS':
      if (state.savedNumber === null) {
        return state;
      }
      return {
        ...state,
        savedNumber: null,
        currentNumber: calculate(state.savedNumber, state.currentNumber, state.operator),
        operator: null,
        enter: false,
      };
    case 'BACK':
      if (state.currentNumber.length > 1 && state.enter) {
        return {
          ...state,
          currentNumber: state.currentNumber.slice(0, state.currentNumber.length - 1),
        };
      }
      return {
        ...state,
        currentNumber: '0',
        enter: false,
      };
    case 'TOGGLE_SIGN':
      if (state.currentNumber === '0') {
        return state;
      }
      return {
        ...state,
        currentNumber: calculate(state.currentNumber, '-1.0', 'x'),
      };
    default:
      return state;
  }
};

export default Calculator;
