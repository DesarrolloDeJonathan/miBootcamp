import "./styles.css";
import { useEffect, useState } from "react";
import { Note } from "./Note.js";
import axios from "axios";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("useEffect");
    setLoading(true);
    setTimeout(() => {
      axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
        const { data } = response;
        setNotes(data);
        setLoading(false);
      });
    }, 2000);
  }, [setLoading]);

  const handleChange = (event) => {
    setNewNote(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Crear nota");
    const noteToAddToState = {
      id: notes.length + 1,
      title: newNote,
      body: newNote,
    };
    console.log(noteToAddToState);

    setNotes((prevNotes) => prevNotes.concat(noteToAddToState));
    setNewNote("");
  };

  console.log("render");
  // if (notes.length === 0) return "¡Hola Jonathan!";

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
    </div>
  );
}
