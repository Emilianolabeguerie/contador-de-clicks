import React from "react";
import "../hojas-de-estilo/contador.css"

function contador ({ numClicks }) {
  return (
    <div className="contador">
      {numClicks}
    </div>
   )
}

export default contador;