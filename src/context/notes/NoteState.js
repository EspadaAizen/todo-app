import NoteContext from "./noteContext";
import {useState} from "react";

const NoteState = (props) =>{
    const host = "http://localhost:5000"
    const noteInitial = []
    const [notes, setNotes] = useState(noteInitial)

    //Get all notes
    const getNotes = async()=>{
        // Retrieve the token from localStorage
    const token = localStorage.getItem('token');
        //API Call
        const response = await fetch(`${host}/api/notes/fetchallnotes`,{
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                "auth-token":token // Include the token in the headers
            }
        });
        const json = await response.json()
        setNotes(json)
    }

    //Add a Note
    const addNote = async(title, description)=>{
        const token = localStorage.getItem('token');
        //TODO: API Call
        //API Call
        const response = await fetch(`${host}/api/notes/addnote`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token":token
            },
            body: JSON.stringify({title, description})
        });
        const note = await response.json();
        setNotes(notes.concat(note))
    }

    //Delete a note
    const deleteNote = async(id)=>{
    const token = localStorage.getItem('token');
        //API Call
        const response = await fetch(`${host}/api/notes/deeletenote/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                "auth-token":token
            }
        });
        const json = response.json();
        const newNotes = notes.filter((note) => {return note._id !== id})
        setNotes(json)
        setNotes(newNotes)
    }

    //Edit a note
    const editNote = async(id, title, description)=>{
    const token = localStorage.getItem('token');
        //API Call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`,{
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json',
                "auth-token":token
            },
            body: JSON.stringify({title, description})
        });
        const json = await response.json();
        let newNotes = JSON.parse(JSON.stringify(notes))
        //Logic to edit in client
        for(let index = 0; index < newNotes.length; index++){
            const element = newNotes[index];
            if(element._id === id){
                newNotes[index].title = title;
                newNotes[index].description = description;
                break;
            }
        }
        setNotes(json);
        setNotes(newNotes);
    }
    return(
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote, getNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;