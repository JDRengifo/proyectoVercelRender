import React, { useEffect } from "react"
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {Link} from 'react-router-dom'
import { getById } from "../../redux/actions";
import './detail.css'
import DetailText from "../../components/detailText/DetailText";

function Detail(){
  const {id} = useParams();
  const allCountries = useSelector((state)=> state.allCountries);
  const dispatch = useDispatch()
    
  useEffect(() => {
    dispatch(getById(id))
  }, [id]);

const country = allCountries[0];

return(
<div className="detailDiv">
  <div className="detailDatos">

        <div className="grid3">
            <div className="detalles">
              <h3 className="name">País: {country.nombre}.</h3>
              <h3>Código: {country.id}.</h3>
              <h3>Capital: {country.capital}.</h3>
              <h3>Continente: {country.continente}.</h3>
            </div>
        
            <div className="g4">
              <h3>Sub-región: {country.subregion}.</h3>
              <h3>Área: {(country.area).toLocaleString()} kilometros Cuadrados.</h3>
              <h3>Población: {(country.poblacion).toLocaleString()} habitantes.</h3>
            </div>

            <div className="bandera">
              <img className="bander" src={country.bandera} alt='Flag'  />
              <Link to='/home'>
              <h5>Volver al listado</h5>
              </Link>
            </div>
        </div>

        <div className="grid2">
        {country.Activities?.map((act)=><img className="actDetail" src={act.imagen} alt='imagen'  /> )}  
        </div>
          {console.log(country.Activities)}
       
        <div className="grid1">
       
       {country.Activities?.map(coun => (
         <DetailText
         key={coun.id}
              id={coun.id}
              nombre={coun.nombre}
              dificultad={coun.dificultad}
              duracion={coun.duracion}
              temporada={coun.temporada}
              imagen={coun.imagen}
              />
              ))}
        </div>
  </div>
</div>
)};

export default Detail
