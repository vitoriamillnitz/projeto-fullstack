import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
  const [races, setRaces] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRaceData = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://ergast.com/api/f1/current.json'); 
        
        if (!response.ok) {
          throw new Error(`Falha na busca da API: ${response.status}`);
        }

        const data = await response.json();
        const raceSchedule = data.MRData.RaceTable.Races; 
        
        setRaces(raceSchedule);
        setError(null); 

      } catch (err) {
        setError(err.message);
        setRaces(null);
      } finally {
        setLoading(false);
      }
    };

    fetchRaceData();
  }, []);

  if (loading) {
    return <div className='homeDiv'>Carregando calendário oficial da Fórmula 1...</div>;
  }

  if (error) {
    return <div className='homeDiv error'>Erro ao carregar os dados: {error}.</div>;
  }

  return (
    <div className='homeDiv'>
      <h2>Calendário Oficial da Temporada</h2>
      <p>Dados obtidos de uma API JSON aberta para demonstração do requisito.</p>

      {races && races.length > 0 ? (
        <ul className='raceList'>
          {races.map((race) => (
            <li key={race.round}>
              🏎️ <strong>{race.round}. {race.raceName}</strong> - {race.Circuit.circuitName} ({race.date})
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhuma corrida encontrada para a temporada na API.</p>
      )}
    </div>
  );
};

export default Home;