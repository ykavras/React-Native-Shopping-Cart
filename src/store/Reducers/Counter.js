const INITIAL_STATE = {
  total: 0,
};

function Counter(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'COUNTER_UP':
      return {...state, total: state.total + 1};
    case 'COUNTER_DOWN':
      return {...state, total: state.total - 1};
    case 'COUNTER__ERROR':
      return {...state, total: state.total};
    default:
      return state;
  }
}
export default Counter;
