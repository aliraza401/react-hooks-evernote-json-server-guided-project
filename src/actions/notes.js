import axios from "axios";

export const setAllNotes = () => async (dispatch) => {
  const url = `http://localhost:3000/notes`;
  // hit user post url with given data
  const result = await axios.get(url).catch((err) => {
    return { error: err };
  });

  dispatch({
    type: "SET_NOTES",
    payload: { notes: result.data },
  });

  console.log(result.data);

  return result; //rerurn user
};

export const setFiltredNotes = (data) => async (dispatch) => {
  dispatch({
    type: "SET_FILTERED_NOTES",
    payload: { notes: data },
  });

  return; //rerurn user
};

export const setCurrentNote = (data) => async (dispatch) => {
  dispatch({
    type: "SET_NOTE",
    payload: { note: data },
  });

  return; //rerurn user
};

export const setEditableNote = (data) => async (dispatch) => {
  dispatch({
    type: "SET_EDITABLE_NOTE",
    payload: { editNote: data },
  });

  return; 
};

export const setOrderByNote = (data) => async (dispatch) => {
  dispatch({
    type: "SET_ORDER_NOTE_BY",
    payload: { orderBy: data },
  });

  return; 
};
