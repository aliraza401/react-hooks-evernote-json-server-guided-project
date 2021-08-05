import React from "react";
import NoteList from "./NoteList";

import {useDispatch} from 'react-redux';
import {setAddNewForm} from './../actions/popup';
import {setOrderByNote} from './../actions/notes';

function Sidebar() {
  const dispatch = useDispatch();

  return ( 
    <div className="master-detail-element sidebar">
      <span>
        <h4 className="mb1">Sort By:</h4>
        <div className="btn-sort" onClick={()=> dispatch(setOrderByNote(1)) } >Oldest</div> 
        <div className="btn-sort" onClick={()=> dispatch(setOrderByNote(2)) } >Latest</div>
        <div className="btn-sort" onClick={()=> dispatch(setOrderByNote(3)) } >Alphabetical</div> 
      </span>
      <NoteList />
      <button className="cursor-pointer" onClick={()=> dispatch(setAddNewForm(true)) } >New</button>
    </div>
  );
}

export default Sidebar;
