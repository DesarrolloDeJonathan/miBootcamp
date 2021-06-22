import "./styles.css";
import { useState } from "react";
import { Note } from "./Note.js";

// let variable = '' //Mala practica, rompre ciclo declarativo de React

export default function App(props) {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState()

  const handleChange = (event) => {
    // console.log({ event });
    // console.log(event.target.value);
    // console.log(newNote); para ver cada caracter ingresado
    setNewNote(event.target.value)
  };

  const handleClick = (event) => {
    console.log("Crear nota");
    // console.log(newNote); ver el valor completo luego de presionar el boton
    const noteToAddState = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5
    }
    console.log(noteToAddState);
    // al ser más legible es mejor empezar con este
    setNotes(notes.concat(noteToAddState))
    // setNotes([...notes, noteToAddState]) Esta es mejor al ser extencible y fácil de leer
    setNewNote("")
  };

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => (
          <Note key={note.id} {...note} />
        ))}
      </ul>

      <div>
        <input type="text" onChange={handleChange} />
        <button onClick={handleClick}>Crear nota</button>
      </div>
    </div>
  );
}
