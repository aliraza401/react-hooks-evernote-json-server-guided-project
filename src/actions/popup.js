export const setAddNewForm = (data) => async (dispatch) => {
  // set loading true or false bbased on data (true/ false)
  dispatch({
    type: "SET_ADD_NEW_FORM",
    payload: {
      addNewForm: data,
    },
  });
};
 