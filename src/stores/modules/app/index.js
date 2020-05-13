const defaultState = {
  errorMsg: ''
};

export const getErrorMsg = state => {
  return state.getIn(['app', 'errorMsg'])
}

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
