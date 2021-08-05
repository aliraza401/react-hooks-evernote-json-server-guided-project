import { combineReducers } from "redux";
import notesReducer from "./notes";
import popupReducer from "./popup";

const rootReducer = combineReducers({
  notes: notesReducer,
  popup: popupReducer,
});

export default rootReducer;