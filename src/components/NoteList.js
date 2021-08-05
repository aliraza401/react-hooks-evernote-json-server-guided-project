import React from "react";
import NoteItem from "./NoteItem";
import { useSelector, useDispatch } from "react-redux";
import _, { result } from "lodash";
import { setCurrentNote } from "../actions/notes";

function NoteList() {
  const dispatch = useDispatch();
  const OrderBy = useSelector((state) => state.notes.orderBy);
  const notes = useSelector((state) => state.notes.notes);
  const filteredNotes = useSelector((state) => state.notes.filteredNotes);

  React.useEffect(() => {
    console.log("1111111");
    if (OrderBy == 1) {
    } else if (OrderBy == 2) {
      const result = _.orderBy(notes, ["id"], ["desc"]);
      console.log(result);
    } else {
    }
  }, [OrderBy]);

  return (
    <ul>
      {/* Render list of notes here... */}
      {filteredNotes.length < 1 
        ? OrderBy == 1
          ? _.orderBy(notes, ["id"], ["asc"]).map((e) => <NoteItem note={e} />)
          : OrderBy == 2
          ? _.orderBy(notes, ["id"], ["desc"]).map((e) => <NoteItem note={e} />)
          : OrderBy == 3 &&
            _.orderBy(notes, ["title"], ["asc"]).map((e) => (
              <NoteItem note={e} />
            ))
        : OrderBy == 1
        ? _.orderBy(filteredNotes, ["id"], ["asc"]).map((e) => (
            <NoteItem note={e} />
          ))
        : OrderBy == 2
        ? _.orderBy(filteredNotes, ["id"], ["desc"]).map((e) => (
            <NoteItem note={e} />
          ))
        : OrderBy == 3 &&
          _.orderBy(filteredNotes, ["title"], ["asc"]).map((e) => (
            <NoteItem note={e} />
          ))}
    </ul>
  );
}

export default NoteList;
