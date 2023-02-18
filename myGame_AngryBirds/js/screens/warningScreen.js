function warningScreen(game) {
    soundButtons = []
    soundButtons = sound("Main", game)


    var buttonRetry = new button(game, 328, 550, 108, 108, document.getElementById('btn-retry'))
    buttonRetry.onaction = function () {
        game.curPlayerScore = 0
        game.playerScore = 0
        game.nodes = mainScreen(game)
        game.bird = undefined
        game.inLevel = true;
        game.atmp = 0
        switch (game.level) {
            case 1:
                this.changeScena("1level")
                break
            case 2:
                this.changeScena("2level")
                break
            case 3:
                this.changeScena("3level")
                break
        }
        game.bird = undefined
    }
    var buttonQuit = new button(game,450, 550, 98, 98, document.getElementById('btn-exit'));
    buttonQuit.onaction = function (){
        game.curPlayerScore = 0
        game.playerScore = 0
        game.nodes = mainScreen(game)
        game.bird = undefined
        game.inLevel = false;
    }
    var warningScene = [
        new background(game, document.getElementById('backs-main')),
        soundButtons[1],
        soundButtons[2],
        new widget(game, 225, 250, 420, 400),
        new textfield(game, 337, 270, 250, 50, false, "Are you sure?"),
        new textfield(game, 337, 390, 270, 50, false, "You may be better !"),
        new textfield(game, 337, 330, 250, 50, false, "NICK:  " + game.curPlayer),
        new textfield(game, 337, 450, 250, 50, false, "LVL:  " + game.curPlayerScore),
        new textfield(game, 337, 510, 250, 50, false, "ALL:  " + game.playerScore),
        buttonRetry,
        buttonQuit
    ]
    game.nodes = warningScene
}