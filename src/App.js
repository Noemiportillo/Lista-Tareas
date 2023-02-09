import './App.css';
import ListDeTareas from './componentes/ListDeTareas';


function App() {
  return (
    <div className='App'>
      <div className='contenedor-title'>
        <h1 className='title'> LISTA DE TAREAS</h1>
      </div>
      <div className='lista-tareas'>
        <h2> Mis Tareas</h2>
          <ListDeTareas />
      </div> 
    </div>   
  );
}

export default App;
