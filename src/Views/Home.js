import React, {useState} from "react";
import axios from "axios";
import Menu from "../Components/Menu";
import Input from "../Components/Input";
import Button from "../Components/Button";
import Error from "../Components/Error";
import "../App.css";

const Home = () => {
  const [resource, setResource] = useState(""); //People, planets, films, species, vehicles, starships
  const [id, setId] = useState(""); //id de cada elemento del recursp
  const [data, setData] = useState({}); //datos
  const [error, setError] = useState(false);//si no encuentra el id el estado error se vuelve true y muestra el p y la img del componente

  const handleChange = (event) => { //actualizar el estado de resource al selecc algo del menú
    setResource(event.target.value);
  };

  const handleIdChange = (event) => { //actualiza el estado de id cuando se ingresa un nuevo valor de id
    setId(event.target.value);
  };


  const handleClick = () => { //botón hace una solicitud a la api de acuerso al resourse y el id
    axios.get(`https://swapi.dev/api/${resource}/${id}`)
      .then((response) => { //se ejecuta el método un then con la respuesta como parámetro
        setData(response.data); //datos de respuesta
        setError(false); //sin error
      })
      .catch((error) => {
        console.log(error);
        setError(true); //se actualiza el error a true y se muestra el mensaje del componente
      });
  };
  

  // const handleClick = async () => { // creo que entiendo más con then y catch
  //   try {
  //     const response = await fetch(`https://swapi.dev/api/${resource}/${id}`);
  //     if (!response.ok) {
  //       throw new Error(response.statusText); //error
  //     }
  //     const json = await response.json(); //
  //     setData(json);
  //     setError(false);
  //   } catch (error) {
  //     console.log(error);
  //     setError(true);
  //   }
  // };

  return (
    <div>
      
        <Menu value={resource} handleChange={handleChange} />
        {/* renderiza comp Menu que recibe como prop value (valor actual de resource) y handleChange (setresurse)*/}
        <Input value={id} handleIdChange={handleIdChange}/>
        {/* renderiza compon Input que recibe como propiedades value (valor actual id) y handleChange (funcion de act setid) */}
        <Button handleClick={handleClick}/>
        {/* renderiza comp Button que recibe como prop handleClick, la funcion que se ejecuta al click */}
        {error ? (<Error />) : (<> 
        {/* si error es es verdadero se renderiza el comp Error de lo contrario, se renderizan los elementos dentro del fragmento */}

        {Object.keys(data).length > 0 && ( //solo si hay datos disponibles
          <div>
            {Object.keys(data).slice(0, 5).map((key) => (//devuelve los primeros 5 atributos
              <p key={key} style={{ fontWeight: "bold", textTransform: "uppercase" }}>{`${key}: ${data[key]}`}</p>
            ))}
          {/* <h2>{data.name || data.title}</h2>
              <p>{data.gender || data.model}</p>
              <p>{data.birth_year || data.manufacturer}</p>
              <p>{data.eye_color || data.crew}</p> */}
          </div>
        )}
          </>
        )}
    
    </div>
  );
}

export default Home;
