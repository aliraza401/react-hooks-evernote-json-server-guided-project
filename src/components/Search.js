import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFiltredNotes } from "./../actions/notes";

function Search() {
  const dispatch = useDispatch();
  const [inputString, setInputString] = React.useState("");
  const notes = useSelector((state) => state.notes.notes);

  React.useEffect(() => {
    let new_arr = [];
    notes &&
      notes.map((note) => {
        if (note.title && note.title.toLocaleLowerCase().includes(inputString.toLocaleLowerCase()  )) {
          new_arr.push(note);
        }
      });

    console.log(new_arr);
    dispatch(setFiltredNotes(new_arr));
  }, [inputString]);

  return (
    <div className="filter">
      <input
        id="search-bar"
        type="text"
        placeholder="Search Notes"
        onChange={(e) => {
          setInputString(e.target.value);
        }}
      />
    </div>
  );
}

export default Search;
