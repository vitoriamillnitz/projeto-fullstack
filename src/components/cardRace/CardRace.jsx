import React from 'react'
import './CardRace.css'

const CardRace = ({dataRace}) => {
  
  const mapUrl = `http://googleusercontent.com/maps.google.com/4{dataRace.latitude},${dataRace.longitude}`;

  return (
    <div className='cardRace'>
        <h2>{dataRace.nome}</h2>
        <p>{new Date(dataRace.data).toLocaleDateString("pt-BR")}</p>
        <p>{dataRace.circuito}</p>
        <a href={mapUrl} target="_blank" rel="noreferrer">Ver Localização</a>
    </div>
  )
}

export default CardRace