import React, {useContext, useState} from 'react'
import noteContext from "../context/notes/noteContext"
import '../styles/AddNote.css';

const AddNote = () => {
    const context = useContext(noteContext);
    const {addNote} = context;

    const [note, setNote] = useState({title: "", description: ""})

    const handleClick = (e)=>{
        e.preventDefault();
        addNote(note.title, note.description);
        setNote({title: "", description: ""})
    }

    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }
    return (
        <div className="mainCont">
            <h2>Add a Note</h2>
            <form className="my-3">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" value={note.title} onChange={onChange} minLength={5} required /> 
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="textarea" className="form-control" id="description" name="description" value={note.description} onChange={onChange} minLength={5} required />
                </div>
               
                <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="addNote" onClick={handleClick}>Add Note</button>
            </form>
        </div>
    )
}

export default AddNote