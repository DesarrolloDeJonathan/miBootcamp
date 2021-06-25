import "./styles.css";
import { useEffect, useState } from "react";
import { Note } from "./Note.js";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  useEffect(() => {
    console.log("Estas usando useEffect");
    console.log("Empieza el conteo");
    setTimeout(() => {
      console.log("ahora el , y el fetch asyncrino");
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {
          console.log("setea las notas de la API en json");
          setNotes(json);
        });
    }, 2000);
  }, []);

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
  if (notes.length === 0) return "¡Hola Jonathan!";

  return (
    <div>
      <h1>Notes</h1>
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
