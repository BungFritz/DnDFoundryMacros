// Roll the max health of all npc tokens in the scene.
for(const token of canvas.tokens.placeables){
    let actor = game.actors.get(token.document.actorId)
    console.log(token)

    if(actor.system.attributes.hp.formula !== undefined && actor.type == 'npc'){
        let val = await new Roll(actor.system.attributes.hp.formula).evaluate()
        for(actor of token.document.actors){
            console.log(actor)
            console.log(val.total)
            actor.update({
                "system.attributes.hp.value": val.total,
                "system.attributes.hp.max": val.total,
            });
        }
    }
}
