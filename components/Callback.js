import React, { useState } from "react";

//child
const Callback = ({ UIColor, setUIColor }) => {
  

  return (
    <input
      type="text"
      id="input"
      aria-label="input"
     onChange={(e) => setUIColor(e.target.value)}
      value={UIColor}
      className="block mx-auto mt-6 w-40 h-28 text-gray-900"
    />
  );
};
export default Callback;
