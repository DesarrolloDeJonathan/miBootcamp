const Mensaje = (props) => {
  // console.log(params);
  return <h1 style={{ color: props.color}}>
    {props.message}
    </h1> 
}


// con esta linea compartimos el archivo con otros
export default Mensaje