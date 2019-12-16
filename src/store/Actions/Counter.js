const goCounter = val => {
  return dispatch => {
    dispatch({
      type: val ? 'COUNTER_UP' : 'COUNTER_DOWN',
    });
  };
};

export default goCounter;
