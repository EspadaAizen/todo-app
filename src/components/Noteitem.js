import React, {useContext} from 'react'
import noteContext from "../context/notes/noteContext"
import '../styles/NotesItem.css';

const Noteitem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;
    return (
        <div className="NotesMainCont">
            <div className="NotesSubCont">
                <div className="CardMainBody">
                    <div className="MainBody">
                        <h5 className="card-title">{note.title}</h5>
                    </div>
                    <p className="card-text">{note.description}</p>
                    <button className="delNote" value="Delete" onClick={()=>{deleteNote(note._id)}}>Delete</button>
                        <button className="updNote" value="Edit" onClick={()=>{updateNote(note)}}>Update</button>

                </div>
            </div>
        </div>
    )
}

export default Noteitem