import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentNote, setEditableNote } from "../actions/notes";
import { setAddNewForm } from "../actions/popup";

function NoteItem(props) {
const dispatch = useDispatch();

  return (
    <li className="cursor-pointer" onClick={() => { dispatch(setAddNewForm(false));   dispatch(setCurrentNote( props.note ))} } >
      <h2>{props.note.title}</h2>
      <p>{ props.note.body && props.note.body.length > 30 ? props.note.body.substring(0,30) + "..." : props.note.body }</p>
    </li>
  );
}
 
export default NoteItem;
