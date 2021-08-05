import React from "react";
import NoteEditor from "./NoteEditor";
import NoteViewer from "./NoteViewer";
import Instructions from "./Instructions";
import { useSelector } from "react-redux";
/*
  Advice: If you cannot figure out how to get this component to work,
          move the div and getContent up into NoteContainer and
          try to get it to work in the parent first.
          Then complete the rest of your app before attempting to
          refactor to get this Content component to work.
*/
function Content() {
  const note = useSelector((state) => state.notes.note);
  const addNewForm = useSelector((state) => state.popup.addNewForm);
  const editNote = useSelector((state) => state.notes.editNote);

  console.log("sfaf", note);

  const getContent = () => { 
    if (addNewForm) {
      return <NoteEditor />; 
    } else if (Object.keys(editNote).length != 0) {
      return <NoteEditor editNote={editNote} />;
    }  else if (Object.keys(note).length != 0) {
      return <NoteViewer note={note} />;
    }else { 
      return <Instructions />;
    }
  };
  return <div className="master-detail-element detail">{getContent()}</div>;
}

export default Content;
