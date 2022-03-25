import React, { useState, useEffect } from "react";

const ListaTareas = (props) => {
  const { tareas, setTareas } = props;
  

  const [tareaInfo, setTareaInfo] = useState({
    tareaLista: false,
    tarea: "",
    id: 0
  });

  useEffect(() => {
    console.log(tareaInfo,"tareaInfo");
  }, [tareaInfo]);

  useEffect(() => {
      console.log(tareas,"Tareas");
  }, [tareas]);

  const onChange = (id, e) => {
      console.log(id, "indexxxx") 
    setTareaInfo({
      ...tareaInfo,
      [e.target.name]: e.target.type === "checkbox" ? e.target.checked: e.target.value,
      
   });
    
  };
  
  const onSubmit = (e) => {
    e.preventDefault();

    setTareas([...tareas, tareaInfo]);
    //console.log(tareaInfo)
  };

  

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="tarea">Agrega una Tarea</label>
          <input type="text" name="tarea" onChange={onChange}></input>
        </div>
        <input type="submit" value="Agregar Tarea"></input>
        <div>
            {
                tareas.map((tar)=>
                <div className='tareas' key={tar.id}>
                <p> {tar.tarea} </p>
                <input type="checkbox"  name="tareaLista"  checked={tar.tareaLista} onChange={(e) => onChange(key, e)}/>
                </div>)
            }
        </div>
        
      </form>
      
    </div>
  );
};

export default ListaTareas;