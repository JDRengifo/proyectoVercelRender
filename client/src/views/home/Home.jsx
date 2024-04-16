import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getCountries, getByName, getById, orderCards, orderCardsXnum, orderCardsXContinents, getAllActivities, orderXActivity } from '../../redux/actions'
import Pagination from '../../components/pagination/Pagination'
import Cards from '../../components/cards/Cards'
import NavBar from '../../components/navBar/NavBar'
import './home.css'


function Home() {
  
  const dispatch = useDispatch();

  const handleOrderContinents = (event)=>{
    dispatch(orderCardsXContinents(event.target.value));
  }
  const allCountries = useSelector((state)=> state.allCountries);
  const allActivities = useSelector((state)=> state.allActivities);
  
  const [filters, setFilters] = useState(allCountries);
  const [searchString, setSearchString] = useState("");
  
  function handleChange(event) {
    console.log('event',event.target.value);
    setSearchString(event.target.value);
  };
  
  function handleSubmit(event) {
    event.preventDefault();
    if(searchString.length===3 ) dispatch(getById(searchString))
    if(searchString.length>3) dispatch(getByName(searchString))
  }

const handleOrder = (event) => {
  dispatch(orderCards(event.target.value));
}

const handleCount = (event) => {
  dispatch(orderCardsXnum(event.target.value));
}

const handleOrderActivity = (event) => {
  dispatch(orderXActivity(event.target.value));
}
  
  useEffect(()=>{
    dispatch(getCountries()),
    dispatch(getAllActivities())
  },[dispatch])
  
   //! Paginado
  const cantidadDePaisesAMostrar = 10;
  const [paginaActual , setPaginasActual] = useState(1)
  
  const segundoIndex = paginaActual * cantidadDePaisesAMostrar;
  const primerIndex = segundoIndex - cantidadDePaisesAMostrar;
  const ncountries = allCountries.slice(primerIndex, segundoIndex);
  const numDePaginasTotal = Math.ceil(allCountries.length / cantidadDePaisesAMostrar);
  //! ****
  
  return (
    
    <div className='homeContainer'>
     
        <NavBar 
          handleChange = {handleChange} 
          handleSubmit = {handleSubmit}
          handleCount = {handleCount}
          handleOrder = {handleOrder}
          handleOrderContinents={handleOrderContinents}
          handleOrderActivity = {handleOrderActivity}
        />
       
    {allCountries.length>=1?(<Pagination 
      paginaActual={paginaActual}
      setPaginasActual={setPaginasActual}
      numDePaginasTotal={numDePaginasTotal} 
    />): undefined}

      <Cards 
        ncountries={ncountries}
      />
    </div>

  )
}

export default Home
