import {Link} from 'react-router-dom';
import {IoIosArrowBack} from 'react-icons/io'
import { useState } from 'react';

const CreateNote = () => {  
  const[title,setTitle] = useState('')
  const[details,setDetails] = useState('')

  const handleSubmit = () =>{
    e.preventDefault();

    console.log(title, details)
  }

  return (
    <section>
      <header className='create-note__header'>
        <Link to='/' className='btn'><IoIosArrowBack/></Link>
        <button className="btn lg primary">Guardar</button>
      </header>
      <form className='create-note__form'> 
        <input type='text' placeholder='Titulo' value={title} onChange={(e)=>setTitle(e.target.value)} autoFocus/>
        <textarea rows='28' placeholder='Detalles de la nota...' value={details}onChange={(e)=>setDetails}></textarea>
      </form>
    </section>
  )
}
export default CreateNote