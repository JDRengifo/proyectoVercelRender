import { useState } from 'react'
import './create.css'

function Create() {
 
  const [actividades, setActividades]=useState({
    nombre: "", 
    duracion: "", 
    dificultad: "", 
    temporada: []
  });
  
  const handleChange =(event)=>{
    if(event.target.type !== 'checkBox'){
      setActividades({...actividades, [event.target.name]: event.target.value})
    }
  }

  const onSubmit = ()=>{
    
  }
   
  
    return (
      <dir className='activitieContainer'>

        <h2 className='createTittle'>Acá va el Formulario</h2>
      {/* <form className='activitieFormContainer'>
        
        <div className="Crear">
            <div className="inputcrear">
              <label className="label" htmlFor="nombre">
                Actividad:
              </label>
              <input
                name="nombre"
                type="text"
                placeholder="Ingrese el tipo de activadad"
                value={actividades.nombre}
                onChange={handleChange}
              />
              <br />
              <label className="label" htmlFor="duracion">
                Duración: 
              </label>
              <input
                name="duracion"
                type="text"
                placeholder="Ingrese la duracion en horas"
                value={actividades.duracion}
                onChange={handleChange}
              />
              <br />
              <label className="label" htmlFor="dificultad">
                Dificultad: 
              </label>
              <input
                name="dificultad"
                className="dificultad"
                type="number"
                value={actividades.dificultad}
                onChange={handleChange}
              />
              <br />
            </div>
            <div className="temporadaContainer">
              <hr style={{ borderStyle: "none" }} />
              <label className="labelTemporada" htmlFor="temporada">
                Temporada:
              </label>
              <div id="temporada" className="temporada" onChange={handleChange}>
                <div className="Verano">
                  <input name="verano" value="1" type="checkbox" id="Verano" />
                  <label htmlFor="verano">Verano</label>
                </div>
  
                <div className="invierno">
                  <input
                    name="invierno"
                    value="2"
                    type="checkbox"
                    id="invierno"
                  />
                  <label htmlFor="invierno">Invierno</label>
                </div>
  
                <div className="otono">
                  <input name="otono" value="11" type="checkbox" id="otono" />
                  <label htmlFor="otono">Otoño</label>
                </div>
                <div className="primavera">
                  <input
                    name="primavera"
                    value="28"
                    type="checkbox"
                    id="primavera"
                  />
                  <label htmlFor="primavera">Primavera</label>
                </div>
                             </div>
              </div>
            </div>
            <button type='submit'>Crear Actividad</button>
  
      </form>   */}

      </dir>
  
    )
  }
  

export default Create
