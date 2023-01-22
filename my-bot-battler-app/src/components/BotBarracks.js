import React from "react";

function BotBarracks({bots}){
// console.log(bots)

    bots.map((bot) => (
        <div className="card">
            <img src={bot.avatar_url} alt="The Avatar"/>
        <div className="card-body">
            <h1 className="card-title">{bot.name}</h1>
            <p className="card-text">{bot.catchphrase}</p> 
        </div>
            <div className="card-footer">
            health:{bot.health}
            damage:{bot.damage}
            armor:{bot.armor}           
            </div>  

        </div>
    ))

    return (
        <div >

            
        </div>
    )

}

export default BotBarracks;