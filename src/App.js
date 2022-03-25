import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import BoxForm from './Components/BoxForm';
import Boxes from './views/Boxes';
import Links from './Components/Links';
import OtrasEntradas from './Components/OtrasEntradas';
import ListaTareas from './Components/ListaTareas';

function App() {

  const [boxes,setBoxes]=useState([]);
  const [tareas,setTareas]=useState([]);
  return (
    <div className="App">
      <BoxForm boxes={boxes} setBoxes={setBoxes}></BoxForm>
      <Boxes boxes={boxes} ></Boxes>
      <hr></hr>
     <Links></Links>
     <hr></hr>
     <OtrasEntradas></OtrasEntradas>
     <hr></hr>
     <ListaTareas tareas={tareas} setTareas={setTareas}></ListaTareas>
    </div>
  );
}

export default App;