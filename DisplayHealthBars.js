// Change all health bars to display for owner (except if they already have an option set)
const tokens = canvas.tokens.placeables.map(token => {
    if(token.document.displayBars == CONST.TOKEN_DISPLAY_MODES.NONE){
        return {
            _id: token.id,
            "bar1.attribute": "attributes.hp",
            "bar2.attribute": "",
            "displayName": CONST.TOKEN_DISPLAY_MODES.OWNER,
            "displayBars": CONST.TOKEN_DISPLAY_MODES.OWNER
        };
    }else{
        return {
            _id: token.id
        }
    }
});

canvas.scene.updateEmbeddedDocuments('Token', tokens)
