// import React from "react";
// import { useParams } from "react-router-dom";

// function Person() {
//   const { id } = useParams();
//   return <h1>{id}</h1>;
// }

// export default Person;

import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom"; 
import axios from "axios";

const Person = () => {
  const {id} = useParams(); //obtener el valor del parámetro de la URL: el id
  const [person, setPerson] = useState();

  useEffect(() => { //se tiene que ejecutar cada vez que cambia el id
    axios
      .get(`https://swapi.dev/api/people/${id}/`) 
      .then((response) => setPerson(response.data))
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div>
      {person ? (
        <h1>{person.name}</h1>
      ) : (
        <h4>Loading ...</h4> // se necesita un loading ya que se renderizaría el nombre antes de que se reciba la data, lo que lanza un error
      )}
    </div>
  );
}

export default Person;