import './cardActivitie.css'

function CardAdtivitie({items}) {
   
 const {nombre, duracion, dificultad, temporada, imagen} = items

  return (
    <div className='activitieContainer'>
      
      <h2>{nombre}</h2>
      <p>{duracion}</p>
      <p>{dificultad}</p>
      <p>{temporada} </p>
      <img src={imagen} alt="imagen" />
    </div>  

  )
}

export default CardAdtivitie
