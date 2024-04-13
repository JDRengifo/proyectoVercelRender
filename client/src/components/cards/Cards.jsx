import Card from '../card/Card'
import './cards.css'

function Cards({ncountries}) {
  // console.log(ncountries)
  const countriesList = ncountries;
  return (
    <div className='cardsContenedor'>
      {countriesList?.map(country=>
      <Card 
      key = {country.id}
      country ={country}/>
      )}
      
    </div>

  )
}

export default Cards