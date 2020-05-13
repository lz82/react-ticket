export const actionTypes = {
  SET_ERROR: 'app/set_error',
  CLEAR_ERROR: 'app/clear_error'
};

export const actionCreators = {
  clearError: () => {
    return {
      type: actionTypes.CLEAR_ERROR
    };
  },

  setError: (msg) => {
    return {
      type: actionTypes.SET_ERROR,
      error: msg
    };
  }
};
