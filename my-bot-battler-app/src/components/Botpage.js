import React, { useEffect, useState } from "react";
import BotBarracks from "./BotBarracks";

function Botpage(){
    
  const [bots , setBots] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/bots")
          .then(response => response.json())
          .then(bots => setBots(bots))
    }, [])
 

    return(
    <div>
        
        <BotBarracks key={bots.id} bots={bots} />
    </div>
    )
    }

export default Botpage;