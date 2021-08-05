const initState = {
  addNewForm: false,
};

const loadingReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_ADD_NEW_FORM":
      return { ...state, addNewForm: action.payload.addNewForm };
    default:
      return state;
  }
};

export default loadingReducer;
 