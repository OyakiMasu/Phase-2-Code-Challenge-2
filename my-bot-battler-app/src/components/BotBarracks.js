import React from "react";

function BotBarracks({bots, handleClick}){
// console.log(bots)


 function PasteBots(){ 
    return (
    bots.map((bot) => (
      
        <div onClick={() => {
            handleClick(
            bot.id,
            bot.avatar_url,
             bot.name,
            bot.catchphrase,
            bot.health,
            bot.damage,
             bot.armor )
            
        }} className="card-container" key={bot.id}>
        <div className="card ">
            <img src={bot.avatar_url} alt="The Avatar"/>
        <div className="card-body">
            <h1 className="card-title">{bot.name}</h1>
            <p className="card-text">{bot.catchphrase}</p> 
        
        <div className="card-footer">
            health:{bot.health},
            damage:{bot.damage},
            armor:{bot.armor} 
            </div>          
        </div>  
        </div>
      
        </div> 
            
    ))
    )
}
    return (
        <div className="card-container" >
            <PasteBots/>
        </div>
    )

}

export default BotBarracks;

