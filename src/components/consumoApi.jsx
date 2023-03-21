import React, { useState, useEffect } from 'react';

function MiComponente() {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.sportsdata.io/v4/soccer/scores/json/Competitions?key=2a671c1c52e84b4794e603d70bdfb6c7');
      const data = await response.json();
      setDatos(data);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Competiciones</h1>
      <ul>
        {datos.map(dato => (
          <li key={dato.id}>Id:{dato.CompetitionId}/{dato.key} ---- Pais:{dato.AreaName} ----    Competicion:{dato.Name}</li>
         
        ))}
      </ul>
    </div>
  );
}

export default MiComponente;
