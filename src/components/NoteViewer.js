import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setEditableNote } from "./../actions/notes";

function NoteViewer(props) {
  const dispatch = useDispatch();
  return (
    <>
      <h2>{props.note.title}</h2>
      <p>{props.note.body}</p>
      <button onClick={() => dispatch(setEditableNote(props.note))}>
        Edit
      </button>
    </>
  );
}

export default NoteViewer;
