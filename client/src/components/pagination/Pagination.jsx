import React from "react";

import './pagination.css';

const Pagination = ({
    paginaActual, 
    setPaginasActual, 
    numDePaginasTotal
} )=>{

    const handlerAnterior = ()=>{
        if(paginaActual !== 1) setPaginasActual(paginaActual-1);
    }

    const handlerPosterior = ()=>{
        if(paginaActual !== numDePaginasTotal) setPaginasActual(paginaActual+1);
        
    }

    return(
        
            <div className="controllerPag">
                <h2 id='h2pag' className="paguinar" onClick={handlerAnterior}>Anterior</h2>
                <h2 className="paguinar">Pagina {paginaActual}/de {numDePaginasTotal}</h2>
                <h2 id='h2pag' className="paguinar" onClick={handlerPosterior}>Siguiente</h2>
            </div>
        
    )
}

export default Pagination;