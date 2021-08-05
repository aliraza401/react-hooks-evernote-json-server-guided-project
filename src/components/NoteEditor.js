import React from "react";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { setAddNewForm } from "./../actions/popup";
import {
  setAllNotes,
  setCurrentNote,
  setEditableNote,
} from "./../actions/notes";

function NoteEditor() {
  const dispatch = useDispatch();
  const inputTitle = React.useRef("");
  const inputBody = React.useRef("");
  const [inputEdit, setInputEdit] = React.useState({});
  const notes = useSelector((state) => state.notes.notes);
  const editNote = useSelector((state) => state.notes.editNote);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const title = inputTitle.current.value;
    const body = inputBody.current.value;
    const data = { title, body, userId: 1 };
    const url = `http://localhost:3000/notes`;
    await axios.post(url, data);
    await dispatch(setAllNotes());
  };

  const handleEditSubmit = async (event) => {
    event.preventDefault();
    const url = `http://localhost:3000/notes/${editNote.id}`;
    await axios.patch(url, inputEdit);
    await dispatch(setAllNotes());
    await dispatch(setAddNewForm(false));
    await dispatch(setEditableNote({}));
  };

  React.useEffect(() => {
    if (inputTitle.current.value !== "" && inputBody.current.value !== "") {
      // clearInputs();
      dispatch(setCurrentNote(notes.slice(-1)[0]));
      dispatch(setAddNewForm(false));
    }
  }, [notes]);

  React.useEffect(() => {
    return () => {
      // unmount
    };
  }, []);

  React.useEffect(() => {
    setInputEdit({
      title: editNote.title,
      body: editNote.body,
      userId: editNote.userId,
      id: editNote.id,
    });
  }, [editNote]);

  const clearInputs = () => {
    inputTitle.current.value = "";
    inputBody.current.value = "";
  };

  return (
    <>
      {Object.keys(editNote).length === 0 ? (
        <form className="note-editor" onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Enter Title"
            ref={inputTitle}
          />
          <textarea name="body" placeholder="Enter Body" ref={inputBody} />
          <div className="button-row">
            <input className="button" type="submit" value="Save" />
            <button
              type="button"
              onClick={() => {
                // clearInputs();
                dispatch(setAddNewForm(false));
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <form className="note-editor" onSubmit={handleEditSubmit}>
          <input
            type="text"
            name="title"
            value={inputEdit.title}
            onChange={(e) =>
              setInputEdit({ ...inputEdit, title: e.target.value })
            }
            placeholder="Enter Title"
          />
          <textarea
            name="body"
            placeholder="Enter Body"
            value={inputEdit.body}
            onChange={(e) =>
              setInputEdit({ ...inputEdit, body: e.target.value })
            }
          />
          <div className="button-row">
            <input className="button" type="submit" value="Save" />
            <button
              type="button"
              onClick={() => {
                dispatch(setAddNewForm(false));
                dispatch(setEditableNote({}));
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </>
  );
}

export default NoteEditor;
