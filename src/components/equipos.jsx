import '../App.css'

import React, { useState, useEffect } from 'react';

function Equipos({ idEquipo, competencia }) {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const url = `https://api.sportsdata.io/v4/soccer/scores/json/Teams/${competencia}?key=2a671c1c52e84b4794e603d70bdfb6c7`;
      const response = await fetch(url);
      const data = await response.json();
      setDatos(data);
    }

    fetchData();
  }, [competencia]);

  let equipo = Array.isArray(datos) ? datos.filter(dato => dato.GlobalTeamId === idEquipo) : [];

  return (
    <>
      {equipo.map((team) => (
        <div className="equipo" key={team.Name}>
          <img className="imagenEquipo" src={team.WikipediaLogoUrl} alt="" />
          <p>{team.Name}</p>
        </div>
      ))}
    </>
  );
}

export default Equipos;
