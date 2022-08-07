import React, { useState } from "react";
import Callback from "../components/Callback";

export default function Parent() {
  const [UIColor, setUIColor] = useState(null);

  
  
  
  return (
    <div className="max-w-4xl justify-center bg-gray-50 mx-auto">
      <div
        className="mx-auto block w-64 h-60  border-2 border-solid border-gray-900"
        style={{ background: `${UIColor}` }}
      ></div>
      
      <Callback 
    
        setUIColor={setUIColor}
        UIColor={UIColor}
      />
    
    </div>
  );
}
