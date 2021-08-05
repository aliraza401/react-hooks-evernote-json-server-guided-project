const initState = {
  notes: [],
  filteredNotes: [],
  note: {}, 
  editNote: {},
  orderBy: 1,
};

const usersReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_NOTES":
      return { ...state, notes: action.payload.notes };
    case "SET_FILTERED_NOTES":
      return { ...state, filteredNotes: action.payload.notes };
    case "SET_NOTE":
      return { ...state, note: action.payload.note };
    case "SET_EDITABLE_NOTE":
      return { ...state, editNote: action.payload.editNote };
    case "SET_ORDER_NOTE_BY":
      return { ...state, orderBy: action.payload.orderBy };
    default:
      return state;
  }
};

export default usersReducer;
