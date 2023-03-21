
import Equipos from './equipos';

function Partido({equipoLocal, equipoVisitante, competencia, resultadoEquipoLocal, resultadoEquipoVisitante, tiempo,horaInicio}) {
  // Dividir los resultados por 2 si la competencia es 5
  if (competencia === 5) {
    resultadoEquipoLocal /= 2;
    resultadoEquipoVisitante /= 2;
  }

  return (
    <section className="sect-1">
      <div className="contenedor">
        <div className="equipos">
          <div className="equipo1">
            <Equipos competencia={competencia} idEquipo={equipoLocal}/>
            <p className="resultado">{resultadoEquipoLocal}</p>
          </div>
          <h2>VS</h2>
          <div className="equipo2">
            <Equipos competencia={competencia} idEquipo={equipoVisitante}/>
            <p className="resultado">{resultadoEquipoVisitante}</p>
          </div>

        </div>
        <div className="tiempo">
          <p>{horaInicio}</p>
          <p>{tiempo}</p>
        </div>
      </div>
    </section>
  );
}

export default Partido;
