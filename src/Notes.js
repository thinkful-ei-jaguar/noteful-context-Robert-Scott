import React from 'react';
import './Notes.css';
import {Link} from 'react-router-dom';
import ApiContext from './context/ApiContext';


export default class Notes extends React.Component {

  static contextType = ApiContext;
    render(){
        const notes = this.context.notes
        .filter(note=>note.folderId===this.props.match.params.folderid)
        .map((note)=>
        <>
        <Link className="folder box" id={note.id} to={`/note/${note.id}`}>
          <h2>{note.name}</h2>
        </Link>
        <button  type="button" onClick={()=>this.context.deletehandlenote(note.id)}>delete</button>
        </>
      );
      return (
        <div className="noteholder">
            {notes}
        </div>
      );
    }
  }