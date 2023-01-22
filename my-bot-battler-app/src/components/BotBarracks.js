import React from "react";

function BotBarracks({bots}){
// console.log(bots)
 

 function PasteBots(){ 
    return (
    bots.map((bot) => (
      
        <div className="container" key={bot.id}>
        <div className="card col-5 p-1 ">
            <img src={bot.avatar_url} alt="The Avatar"/>
        <div className="card-body">
            <h1 className="card-title">{bot.name}</h1>
            <p className="card-text">{bot.catchphrase}</p> 
        </div>
            <div className="card-footer">
            health:{bot.health},
            damage:{bot.damage},
            armor:{bot.armor}           
            </div>  
        </div>
        </div> 
            
    
    ))
    )
}
    return (
        <div >
            <PasteBots/>
            

            
        </div>
    )

}

{/* <div className="container" key={bot.id}>
<div className="card col-5 p-1 ">
    <img src={bot.avatar_url} alt="The Avatar"/>
<div className="card-body">
    <h1 className="card-title">{bot.name}</h1>
    <p className="card-text">{bot.catchphrase}</p> 
</div>
    <div className="card-footer">
    health:{bot.health},
    damage:{bot.damage},
    armor:{bot.armor}           
    </div>  
</div>
</div> */}

export default BotBarracks;

