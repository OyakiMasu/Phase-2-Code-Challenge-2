import React, { useEffect, useState } from "react";
import BotBarracks from "./BotBarracks";
import YourBotArmy from "./YourBotArmy";

function Botpage() {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch("https://bot-battlerdb.vercel.app/bots")
      .then((response) => response.json())
      .then((bots) => setBots(bots));
  }, []);

  function handleClick( id, image, name , catchphrase, health, damage, armor ) {
    let vetBots = document.querySelector("#mybotarmy");
    let vettedBot = document.createElement("div");
    vettedBot.id="recruit"
    vettedBot.innerHTML = `   
      
            <img src=${image} alt="The Avatar"/>
            <div className="card-body">
            <h1 className="card-title">${name}</h1>
            <p className="card-text">${catchphrase}</p> 
            </div>
             <div className="card-footer">
              health:${health},
              damage:${damage},
              armor:${armor}  ` 
              ;
              vetBots.addEventListener("click", () => {
                vettedBot.remove()
              }  )
            vetBots.appendChild(vettedBot)
       }

   

  
      return (
        <div>
          <BotBarracks handleClick={handleClick} key={bots.id} bots={bots} />
          <YourBotArmy key={bots.id} bots={bots} />
        </div>
      );
    }

export default Botpage;
