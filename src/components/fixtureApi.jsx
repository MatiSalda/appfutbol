import React, { useState, useEffect } from 'react';
import Partido from './partido';
import moment from 'moment-timezone';
import 'moment/locale/es'; // para configurar el idioma de moment
moment.locale('es');


function Fixture() {
  const [datos, setDatos] = useState([]);
  const [competencia, setCompetencia] = useState(1);
  const [cargando, setCargando] = useState(true);
  const [dia, setDia] = useState(moment().format('YYYY-MM-DD')); // Inicializar con la fecha actual

  const enlace = `https://api.sportsdata.io/v4/soccer/scores/json/GamesByDate/${competencia}/${dia}?key=2a671c1c52e84b4794e603d70bdfb6c7`;

  useEffect(() => {
    // setCargando(true); // Establecer en "true" antes de obtener los datos
    async function fetchData(paramDb) {
      const response = await fetch(paramDb);
      const data = await response.json();
      setDatos(data);
      setCargando(false); // Establecer en "false" una vez que se han obtenido los datos
    }

    fetchData(enlace);
    
  }, [competencia, dia, enlace]);

  const competenciaHandler = (e) => {
    setCompetencia(e.target.value);
  };

  const diaHandler = (e) => {
    setDia(e.target.value);
  };

  const opcionesDias = [    { valor: moment().format('YYYY-MM-DD'), etiqueta: 'Hoy' },    { valor: moment().add(1, 'days').format('YYYY-MM-DD'), etiqueta: 'Mañana' },    { valor: moment().add(2, 'days').format('YYYY-MM-DD'), etiqueta: 'Pasado Mañana' },  ];

  return (
    <div>
      <h1 className="titulo">Fixture</h1>
      <div className="contSelects">
        <div className="selects">
          <select name="competencia" onChange={competenciaHandler} id="comp">
        <option value="1">Premier</option>
        <option value="5">Liga Argentina</option>
        <option value="27">FA CUP</option>
      </select>
    
      <select name="dia" onChange={diaHandler} id="comp" value={dia}> {/* Agregar el valor de "dia" al selector */}
        {opcionesDias.map(opcion => (
          <option value={opcion.valor} key={opcion.valor}>{opcion.etiqueta}</option>
        ))}
      </select>
      
        </div>
      
      </div>

      {cargando ? (
        <div>
          <h1>cargando...</h1>
        </div>
      ) : (  

          datos.length === 0 ? <div><h1 className='titulo'>No hay partidos en la competencia elegida </h1><h2 className='titulo'>Probá cambiando de competencia o día</h2></div>  :
      <>
          {datos.map(dato => (
            <Partido
              key={dato.GlobalHomeTeamId}
              competencia={competencia}
              equipoLocal={dato.GlobalHomeTeamId}
              resultadoEquipoLocal={dato.HomeTeamScore}
              equipoVisitante={dato.GlobalAwayTeamId}
              resultadoEquipoVisitante={dato.AwayTeamScore}
              tiempo={dato.ClockDisplay}
              horaInicio={moment.tz(dato.DateTime, 'Europe/London').tz('America/Argentina/Buenos_Aires').format('LLL')}
              estado={dato.Status}
            />
          ))}
          </>)
        }
      
        
      
    </div>
  );
  
}

export default Fixture;