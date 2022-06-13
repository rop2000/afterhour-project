export default (state, action) => {
  switch (action.type) {
    case "ADD_OFFER":
      return {
        offerList: [action.payload, ...state.offerList],
      };
    default:
      return state;
  }
};
