import './styles.css';

// Si el valor fuera undefined
const notes = undefined
// [
//   {
//     id: 1,
//     content: 'HTML is easy',
//     date: '2019-05-30T17:30:31.098Z',
//     important: true
//   },
//   {
//     id: 2,
//     content: 'Browser can execute only JavaScript',
//     date: '2019-05-30T18:39:34.091Z',
//     important: false
//   },
//   {
//     id: 3,
//     content: 'GET and POST are the most important methods of HTTP protocol',
//     date: '2019-05-30T19:20:14.298Z',
//     important: true
//   }
// ]

export default function App() {
  // Haremos esto para evaluar el contenido del array y condicionar lo que retornara
  if (!notes) {
    return 'No tenemos notas 1ra forma que evalua si es una valor Falsy'
  }
  if (notes.lenght === 0) {
    return 'No tenemos notas 2da forma revisando las condiciones booleanas'
  }
  if (typeof notes === 'undefined') {
    return 'No tenemos notas 3ra forma alternativa mejor que falsy ya que es más especifica'
  }
  if (typeof notes === 'undefined' || notes.lenght === 0) {
    return 'No tenemos notas 4ta alternativa evaluando dos condiciones'
  }

  return (
    <div>
      {
        notes.map((notes) => {
          // return <p><strong>{note.id}</strong>{note.content}</p>;
          return <div><p>
            <strong>{notes.content}</strong>
          </p>
            <p><time>{notes.date}</time></p>
          </div>
        })
      }
    </div>
  )
}
