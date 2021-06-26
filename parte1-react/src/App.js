import "./styles.css";
import { useEffect, useState } from "react";
import { Note } from "./Note.js";
import { getAllNotes } from "./sevices/notes/getAllNotes.js";
import { createNote } from "./sevices/notes/createNote.js";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    console.log("useEffect");
    setLoading(true);
    getAllNotes().then((notes) => {
      setNotes(notes);
      setLoading(false);
    });
  }, []);

  const handleChange = (event) => {
    setNewNote(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Crear nota");
    const noteToAddToState = {
      title: newNote,
      body: newNote,
      userId: 1,
    };

    createNote(noteToAddToState)
      .then((newNote) => {
        setNotes((prevNotes) => prevNotes.concat(newNote));
      })
      .catch((error) => {
        console.error(error);
        setError("La API a petado");
      });

    setNewNote("");
  };

  console.log("render");

  return (
    <div>
      <h1>Notes</h1>
      {loading ? "cargando..." : ""}
      <ol>
        {notes.map((note) => (
          <Note key={note.id} {...note} />
        ))}
      </ol>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
        <button>Crear nota</button>
      </form>
      {error ? error : ""}
    </div>
  );
}
