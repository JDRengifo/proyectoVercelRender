import React from 'react';

const DetailText = ({nombre, temporada,duracion,dificultad})=> {
    

    return(
        <div className='detailTextCont'>
            <p>En {temporada}, cuenta con {nombre} con una duración de prox. {duracion} horas. Dificultad de la actividad: {dificultad} en escala de (1 a 6)</p>
        </div>
    )
}

export default DetailText;