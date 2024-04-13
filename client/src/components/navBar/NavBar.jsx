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

  console.log(allActivities)
  const selectorACT = allActivities.map(activity=>activity.nombre)
  console.log(selectorACT)
  return (
    
        <div className='navBox'>
          <div className='navBoxgrid'>
          <div className='navGrid1'>
          <div className='buscarX'>
            <form onSubmit= {handleSubmit}>

              <h5>BUSCADOR DE PAÍS POR NOMBRE O CODIGO CO3</h5>
              <input placeholder="Buscar" onChange={handleChange}/>
              <button type='submit' >BUSCAR</button>
              <h5>FILTRADORES DE PAISE</h5>
            </form>
            </div>
          </div>


          <div className='navGrid3'>
            <div>
            <h5>ORDENAR POR ACTIVIDAD TURISTICA</h5>
              <select name="selectorPaises" onChange={handleOrderActivity}>
                <option value=''>{' '}
                </option>


                {selectorACT.map((activity)=>(<option value={`${activity}`}>{activity}</option>))}</select>

            </div>

            {/* <div>
              
            <Select 
                id = 'selectorPaises'
                options = {allActivities.map((activity)=> ({label:activity.nombre, value:activity.id}))}
                onChange={handleOrderActivity}
                />
            </div> */}
          </div>
          
          <div className='navGrid4'>
            <div>
              <h5>CREAR ACTIVIDADES</h5>
              <Link to={'/createActivities'}>
                 <button onClick={onClickHome}>CreateActivities</button>
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
          {/* <form onChange={handleChange}>
            
          </form>

          <Link to={'/home'}>
          <button onClick={onClickHome}>Home</button>
          </Link>
          */}
        </div>

 

  )
}

export default NavBar

// https://developer.mozilla.org/es/docs/Web/HTML/Element/select
// https://docs.google.com/spreadsheets/d/1z_9PuIsFweGAZNHGqYrm5JqTt-6icFAXllKDXP8i1PQ/edit#gid=0