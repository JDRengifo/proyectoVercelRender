import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CardActivitie from '../../components/cardActivitie/cardActivitie'
import { getAllActivities } from '../../redux/actions';
import './activities.css'

function Activities() {
  const dispatch = useDispatch();
  const allactivities = useSelector((state)=> state.allActivities);
  
  function handleAllActSubmit(event) {
    event.preventDefault()
    dispatch(getAllActivities())
  }

 
 
  console.log(allactivities)

  return (
    <div className='allActiviteCont'>
      <h2>Estas son las actividades encontradas:</h2>
      <button onClick={handleAllActSubmit} className='activitaBusqueda'>BUSCAR</button>

      <div className='activiteContenedor'>
      {allactivities?.map(items=>
          <CardActivitie items ={items}/>
          )}  
        </div>
    </div>
    

  )
}

export default Activities



