
import './App.css';

import { BaseColaboradores } from './components/BaseColaboradores';
import Buscador from './components/Buscador';
import Listados from './components/Listados';
import Formulario from './components/Formulario';
import Alerta from './components/Alerta';
import { useState } from 'react';

function App() {
  const [baseColaboradores, setBaseColaboradores] = useState(BaseColaboradores);
  const [colaboradoresFiltrado, setColaboradoresFiltrado] =
    useState(baseColaboradores);

  const [alert, setAlert] = useState({
    texto: '',
    tipo: '',
    estado: false,
  });

  const addAlert = (newAlert) => {
    setAlert(newAlert);
  };

  return (
    <>
      <h1 className="my-2"><i className="fa-solid fa-user-group"></i> Lista de Colaboradores</h1>
      <Buscador
        data={baseColaboradores}
        dataFilter={setColaboradoresFiltrado}
      />
      <div className="row row-cols-2 justify-content-end m-0">
        <Listados
          data={baseColaboradores}
          setData={setBaseColaboradores}
          dataFilter={colaboradoresFiltrado}
          setDataFilter={setColaboradoresFiltrado}
        />
        <Formulario
          className="formulario"
          addAlert={addAlert}
          data={baseColaboradores}
          setData={setBaseColaboradores}
          dataFilter={colaboradoresFiltrado}
          setDataFilter={setColaboradoresFiltrado}
        />
        <Alerta className="alert" alerta={alert} />
      </div>
    </>
  );
}

export default App;

