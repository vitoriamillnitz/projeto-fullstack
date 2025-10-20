import React, { useContext } from 'react';
import { F1Context } from '../../contexts/F1Context';

export default function RaceResults() {
  const { state } = useContext(F1Context);

  if (state.loading) {
    return <p className="loading">Carregando resultados...</p>;
  }

  if (state.error || state.validationError || !state.data) {
    return null;
  }

  const races = state.data.MRData?.RaceTable?.Races || [];
  const year = state.data.MRData?.RaceTable?.season;

  return (
    <div className="results-container">
      <h2>Temporada {year}</h2>
      {races.length > 0 ? (
        <ul className="race-list">
          {races.map((race) => (
            <li key={race.Circuit.circuitId} className="race-item">
              <div className="race-header">
                <strong>{race.raceName}</strong>
                <span> - {race.date}</span>
              </div>
              <p>Circuito: {race.Circuit.circuitName}, {race.Circuit.Location.country}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhuma corrida encontrada para a temporada {year}.</p>
      )}
    </div>
  );
}