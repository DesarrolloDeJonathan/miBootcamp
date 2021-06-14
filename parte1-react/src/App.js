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

export default function App() {
  return (
    <div>
      {/* reduciendo sintaxis ya que es solo un return que ahora quedara implicito */}
      {
        // Cuando hacemos esta operacion de iterar un lista de elementos
        notes.map( notes =>
          // Y renderizar cada elemento, se tiene que indicar cada cosa que se renderiza
          // en el hijo, en esta caso <div>, tiene que tener un identificador punto es decir único
          <div key = {notes.id}>
          <p>{notes.content}</p>
          <p><time>{notes.date}</time></p>
          </div>
        )
      }
    </div>
  )
}
