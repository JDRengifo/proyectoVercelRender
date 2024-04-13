import React, { useEffect, useState } from "react";

import {useDispatch, useSelector} from 'react-redux'
import { getCountries, postActivities } from "../../redux/actions";
import validate from "../../utils/validar/Validar";
import { Link } from "react-router-dom";
import {imagenesParaEscoger} from "../../utils/imagenesAEscoger" 
import './createActivities.css'

function CreateActivities (){
    const dispatch = useDispatch()
    const allCountries = useSelector((state)=> state.allCountries)
    const [error, setError] = useState({
      nombre: "", 
      duracion: "", 
      dificultad: "", 
      temporada: "",
      paises: "",
    })
    const [actividades, setActividades]=useState({
        nombre: "", 
        duracion: "", 
        dificultad: "", 
        temporada: "",
        imagen: "",
        paises: [],
        nombrePaises: [],
      });

      const handleChangeSelector = (event)=>{
        const nombreBuscado = allCountries.filter((pais)=> pais.id === event.target.value )[0].nombre
         for(let i =0;i<=actividades.paises.length;i++){
          if(actividades.paises[i]=== event.target.value){
            var paisesFilter = actividades.paises.filter((pais)=>pais !== event.target.value)
            var newNombrePais = actividades.nombrePaises.filter((nombre)=>nombre !== nombreBuscado)
              break
          } else {
            var paisesFilter = actividades.paises.concat(event.target.value)
            var newNombrePais = actividades.nombrePaises.concat(nombreBuscado)
          }
        }
         const volverInicio = document.getElementById("selectorPaises")
         volverInicio.value = ""
         console.log(volverInicio)
            //  var otro =[]
            //  for(let i =0;i<actividades.paises.length;i++){
           
            // var traePais = allCountries.filter((pais)=>pais.id === actividades.paises[i])
            //   otro = otro.concat(traePais)
            //  }
        setActividades({
          ...actividades,
          paises: paisesFilter,
          nombrePaises: newNombrePais
        })
      }
      console.log('linea 65',actividades)
      
      const handleClick = (act)=>{
        setActividades({
          ...actividades,
          imagen: String(act)
        })
      }
        
      console.log('linea 66', error)
      
      const handleChange =(event)=>{
        if (event.target.parentNode.parentNode.id === "temporada") {
          
          setActividades({
            ...actividades,
            temporada: event.target.value,
          });
          // console.log("Plataformas: ", actividades.temporada);
          
        }
        if (event.target.type !== "checkbox" ) {
          setActividades({
            ...actividades,
            [event.target.name]: event.target.value, // Sintaxis ES6 para actualizar la key correspondiente
          });
        }
        // console.log(actividades.paises)
        
       setError(validate({...actividades,[event.target.name]: event.target.value}))
      //  console.log(validate({...actividades,[event.target.name]: event.target.value}))
     }
    
      const onSubmit = (event)=>{
        event.preventDefault()
        dispatch(postActivities(actividades))
      }

      useEffect(()=>{
         dispatch(getCountries())
          
      },[dispatch])
      
      
      return(
        <div className="creaActivities">

          <h2>Crear Actividades en esta pagina</h2>
          <form className='activitieFormContainer' onSubmit={onSubmit}>
            <div className="createGrid">
                <div className="creaImagenes">
                {imagenesParaEscoger.map((act)=><img className="creaImg" src={act} alt='imagen'  onClick={()=>handleClick(act)}/> )} 
                </div>
                <div className="creaGrid1">
                    <div className="creaGrid11"></div>

                    <div className="creaGrid12">
                      <h3>Ingrese todos los datos para crear la actividad que desea añadir</h3>
                    </div>

                    <div className="creaGrid13">
                        <label className="label" htmlFor="nombre">Nombre de la actividad: </label>
                        <br />
                        <input
                            id= "nombre"
                            name="nombre"
                            type="text"
                            placeholder="Ingrese el tipo de activadad"
                            value= {actividades.nombre}
                            onChange={handleChange}
                        />
                        <h4>{actividades.nombre}</h4>
                        {/* {console.log('linea 90',error)} */}
                        {error.nombre !== "" && <h4 className="errors">{error.nombre}</h4>}
                    </div>


                    <div className="creaGrid14">
                        <label className="label" htmlFor="duracion">Duración de la actividad en horas:</label>
                        <br />
                        <input
                            name="duracion"
                            type="number"
                            placeholder="Ingrese la duracion en horas"
                            value={actividades.duracion}
                            onChange={handleChange}
                            />
                        
                        {error.duracion !== "" && <h4 className="errors">{error.duracion}</h4>}
                    </div>
                    <div className="creaGrid15">
                        <label className="label" htmlFor="dificultad">Nivel de dificultad de la actividad:</label>
                        <br />
                        <input
                            name="dificultad"
                            className="dificultad"
                            type="number"
                            value={actividades.dificultad}
                            onChange={handleChange}
                        />
                        {error.dificultad !== "" && <h4 className="errors">{error.dificultad}</h4>}
                    </div>

                    <div className="creaGrid16">
                    <label className="label" htmlFor="imagen">Imagen de la actividad:</label>
                    <br />
                        <img src= {actividades.imagen} alt="imagen de la actividad" srcset="" />
                        
                    </div>

                    
                </div>

              <div className="creaGrid2">
                <div>
                  <h4>Elija el País (o paises) a asociar la actividad.</h4>
                  <select id = 'selectorPaises' onChange={handleChangeSelector}>
                    <option value="">Escoja el país</option>
                      {allCountries.map((country)=>(<option value={`${country.id}`}>{country.nombre}</option>))}

                  </select>

                  

                  {/* <ReactSelect 
                      id = 'selectorPaises'
                      options = {allCountries.map((country)=> ({label:country.nombre, value:country.id}))}
                      onChange={handleChangeSelector}
                  /> */}
                  <br />
                  <h2>{actividades.nombrePaises.join(', ')}</h2>
                  {error.paises !== "" && <h4 className="errors">{error.paises}</h4>}
                </div>
              </div>

              <div className="creaGrid3">
                <div className="creaGrid31">
                    <div>
                      <div id="temporada" className="temporada" name="inputTemporada" onChange={handleChange}>
                      <label className="labelTemporada" htmlFor="temporada">Elija La Temporada Del Año:</label>

                          <div className="Verano">
                          <input name="temporada" value="Verano" type="radio" id="Verano" />
                          <label htmlFor="verano">Verano</label>
                          </div>
          
                          <div className="invierno">
                              <input name="temporada" value="Invierno" type="radio" id="invierno"/>
                              <label htmlFor="invierno">Invierno</label>
                          </div>
          
                          <div className="otono">
                              <input name="temporada" value="Otoño" type="radio" id="otono" />
                              <label htmlFor="otono">Otoño</label>
                          </div>

                          <div className="primavera">
                              <input name="temporada" value="Primavera" type="radio" id="primavera"/>
                              <label htmlFor="primavera">Primavera</label>
                          </div>
                          {error.temporada !== "" && <h4 className="errors">{error.temporada}</h4>}
                      </div>
                    </div>

                   </div>

                    <div className="creaGrid32">
                      <button className="botonCrear" type='submit' disabled={error.nombre || error.duracion || error.dificultad || error.paises || error.temporada}>Crear Actividad</button>
                      <br />
                      <Link to='/home'>
                            <button>Volver a Home</button>
                      </Link>
                    </div>

               </div>
            </div>
          </form>
           


        </div>
    )
}

export default CreateActivities;