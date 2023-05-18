// import React from "react";

// function Input (props) {
//   const {value, handleIdChange} = props;
//   return (
//     <input
//       type="number"
//       placeholder="Enter Id"
//       value={value}
//       onChange={handleIdChange}
//     />
//   );
// }

// export default Input;


import React from "react";

const Input = ({ value, handleIdChange }) => (
  <input
    type="number"
    placeholder="Enter Id"
    value={value}
    onChange={handleIdChange}
  />
);

export default Input;
