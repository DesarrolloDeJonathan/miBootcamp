export const Note = (props) => {
  /** Debugando hay suave */
  // console.log(id);
  console.log("props Uno" + props);
  console.log("props Dos", props); //Mejora con la coma
  console.log({ props }); //Usar desestructurado es mejor
  console.table({ props }); //table vermos los objetos ordenados en una
  const { content, date } = props;

  return (
    <li>
      <p>{content}</p>
      <small>
        <time>{date}</time>
      </small>
    </li>
  );
};

export default Note;
