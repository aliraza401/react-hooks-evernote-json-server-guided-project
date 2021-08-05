import React from "react";
import Header from "./Header";
import NoteContainer from "./NoteContainer";
import { setAllNotes } from "./../actions/notes";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setAllNotes()).catch((err) => console.log(err));
  }, []);

  return (
    <div className="app">
      <Header />
      <NoteContainer />
    </div>
  );
}

export default App;
