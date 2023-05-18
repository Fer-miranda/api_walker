// import React from "react";

// function Menu (props) {   //https://swapi.dev/api/
//   const {value, handleChange} = props;
//   return (
//     <select value={value} onChange={handleChange}>
//       <option value="">Select</option>
//       <option value="people">People</option>
//       <option value="planets">Planets</option>
//       <option value="films">Films</option>
//       <option value="species">Species</option>
//       <option value="vehicles">Vehicles</option>
//       <option value="starships">Starships</option>
//     </select>
//   );
// }

// export default Menu;

import React from "react";

const Menu = ({ value, handleChange }) => (
  <select value={value} onChange={handleChange}>
    <option value="">Select</option>
    <option value="people">People</option>
    <option value="planets">Planets</option>
    <option value="films">Films</option>
    <option value="species">Species</option>
    <option value="vehicles">Vehicles</option>
    <option value="starships">Starships</option>
  </select>
);

export default Menu;
