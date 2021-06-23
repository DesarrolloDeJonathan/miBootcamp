import "./styles.css";
import { useState } from "react";
import { Note } from "./Note.js";

export default function App(props) {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

  const handleChange = (event) => {
    setNewNote(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); //evitara que se recarge al enviar input
    console.log("Crear nota");
    const noteToAddToState = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
    };
    console.log(noteToAddToState);

    // usando una función que recibe como parametro el estado anterior y le pasas el nuevo
    setNotes((prevNotes) => prevNotes.concat(noteToAddToState));
    // Esta es mejor al ser extencible y fácil de leer
    // setNotes([...notes, noteToAddToState]);
    setNewNote("");
  };

  const handleShowAll = () => {
    setShowAll(() => !showAll);
  };

  return (
    <div>
      <h1>Notes</h1>
      <button onClick={handleShowAll}>{showAll ? "Show only important" : "Show All"}</button>
      <ul>
        {notes
          .filter((note) => {
            if (showAll === true) return note;
            return note.important === true;
          })
          .map((note) => (
            <Note key={note.id} {...note} />
          ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
        <button>Crear nota</button>
      </form>
    </div>
  );
}
