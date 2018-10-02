const defaultState = {
  savedNumber: null,
  currentNumber: "0",
  operator: null,
  enter: false,
};

const formatNumber = (number) => {
  return `${parseFloat(number.toFixed(10))}`;
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
      return "0";
  }
}

const removeDotInTheEnd = str => {
  if (str[str.length-1] === '.') {
    return str.slice(0, str.length-1);
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
        }
      }
      const newSavedNumber = (state.savedNumber === null)
        ? removeDotInTheEnd(state.currentNumber)
        : calculate(state.savedNumber, state.currentNumber, state.operator);
      return {
        ...state,
        savedNumber: newSavedNumber,
        currentNumber: "0",
        operator: action.payload.operator,
        enter: false,
      };
    case 'CLEAR':
      return {
        ...state,
        savedNumber: null,
        currentNumber: "0",
        operator: null,
        enter: false,
      }
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
        }
      }
      return {
        ...state,
        currentNumber: '0',
        enter: false,
      }
    default:
      return state;
  }
};

export default Calculator;
