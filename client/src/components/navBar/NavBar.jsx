import {useDispatch, useSelector} from 'react-redux';

import { Link } from 'react-router-dom'
import { getCountries } from '../../redux/actions';
import './navBar.css'


function NavBar({ handleChange, handleSubmit, handleOrder,handleOrderActivity, handleCount, handleOrderContinents }) {
  
  const dispatch = useDispatch() 
  const allActivities = useSelector((state)=>state.allActivities)
  
  
  const onClickHome = ()=>{
    dispatch(getCountries())
  }

  const selectorACT = allActivities.map(activity=>activity.nombre)
   return (
      <div className='navBox'>
         <div className='navBoxgrid'>
         <div className='navGrid1'>
         <div className='buscarX'>
          <form onSubmit= {handleSubmit}>

              {/* <h5>BUSCADOR DE PAÍS POR NOMBRE O CODIGO CO3</h5> */}
              <input placeholder="Por nombre ó código CO3" onChange={handleChange}/>
              <button className='botonBuscar' type='submit' >BUSCAR</button>
              <h5 className='filtrar'>FILTRADORES DE PAISES</h5>
            </form>
            </div>
          </div>

          <div className='navGrid3'>
            <div>
            <h5 className='filtrar'>ORDENAR POR ACTIVIDAD TURISTICA</h5>
              <select name="selectorPaises" onChange={handleOrderActivity}>
                <option value=''>{' '}
                </option>
                {selectorACT.map((activity)=>(<option value={`${activity}`}>{activity}</option>))}</select>
            </div>
          </div>
          
          <div className='navGrid4'>
            <div>
              <h5 className='filtrar'>CREAR ACTIVIDADES</h5>
              <Link to={'/createActivities'}>
                 <button className='botonAct' onClick={onClickHome}>CreateActivities</button>
               </Link> 
            </div>
          </div>

            {/* Ordenar por número de pobladores */}
          <div className='navGrid5'>
            <div className='navGrid51'>
              <select onChange={handleCount}>
                <option value="B">Por Población</option>
                <option value="X">Mayor_menor</option>
                <option value="Y">Menor_Mayor</option>
              </select>
            </div>
              
            {/* Ordenar por orden alfabetico */}
            <div className='navGrid52'>
              <select onChange={handleOrder}>
                <option value="B">Orden Alfabético</option>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
              </select>
            </div>
              
            {/* Ordenar por Continente */}
            <div className='navGrid53'>
              <select onChange={handleOrderContinents}>
                  <option value="A">Por Continente</option>
                  <option value="All">todos</option>
                  <option value="Africa">Africa</option>
                  <option value="Antarctica">Antartida</option>
                  <option value="Asia">Asia</option>
                  <option value="Europe">Europa</option>
                  <option value="North America">Norte América</option>
                  <option value="South America">Sur América</option>
                  <option value="Oceania">Oceanía</option>
                </select>
              </div>
   
            </div>
          </div>
          <div className='navGrid6'>
          <div className='navGrid2'>
          </div>
          
      </div>
   </div>
  )
}

export default NavBar
