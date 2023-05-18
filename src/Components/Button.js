// import React from "react";


// function Button (props) {
//   const {handleClick} = props;
//   return <button onClick={handleClick}>Search</button>;
// }

// export default Button;

import React from "react";

const Button = ({ handleClick }) => (
  <button onClick={handleClick}>Search</button>
);

export default Button;
