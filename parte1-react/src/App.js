import './styles.css';

const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    date: '2019-05-30T17:30:31.098Z',
    important: true
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    date: '2019-05-30T18:39:34.091Z',
    important: false
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    date: '2019-05-30T19:20:14.298Z',
    important: true
  }
]

// mejor tenerlo como componente Note y ademas
// const Note = ({note}) => {
//   console.log(note);
//   return (
//     <li>
//       <p>{note.content}</p>
//       <small><time>{note.date}</time></small>
//     </li>
//   )
// }

// Pasar el minimo de props, los que sean necesarios
const Note = ({id, content, date}) => {
  return (
    <li>
      <p>{content}</p>
      <small><time>{date}</time></small>
    </li>
  )
}

export default function App() {
  return (
    <ul>
      {notes.map( note => (
        // El key debe ir donde se esta iterando la lista
        // <Note key={note.id} id={note.id} content={note.content} date={note.date}/>
        //Y esta línea funciona pero estamos copiando todo y puede que perdamos el control
        <Note key={note.id} {...note}/>
      ))}
    </ul>
  )
}
