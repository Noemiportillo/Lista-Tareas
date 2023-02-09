
import React, {useState} from 'react'
import '../styles/formulario.css'
import { v4 as uuidv4 } from 'uuid';


const Formulario = (props) => {

const [input, setInput] = useState('');

//extraer el valor de el campo de texto 
    const cambioTarea = e => {
        setInput(e.target.value)
       
    }
    const envioTarea = e => {
        e.preventDefault(); 
         const tareaNueva = {
            id: uuidv4(),
            texto: input, 
            completada: false  
        }

        props.onSubmit(tareaNueva);
    }

  return (
    <form className='tarea-formulario'
          onSubmit={envioTarea}>
        <input 
            className='tarea-input'
            type="text"
            placeholder='Añadir tarea aquí'
            name='texto'
            onChange={cambioTarea}            
         />

         <button className='tarea-boton'> Agregar tarea </button>
    </form>
  )
}

export default Formulario