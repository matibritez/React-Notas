import {BiSearchAlt2} from 'react-icons/bi'

const Notes = () => {
  return (
    <section>
      <header className="notes__header">
          <h2>Mis Notas</h2>
          {/*<input type="text" autoFocus placeholder="Palabra Clave..."></input>*/}
          <button className="btn"><BiSearchAlt2/></button>
      </header>
    </section>
  )
}
export default Notes