function gameoverScreen(game) {
    game.curPlayerScore = 0
    var soundButtons = []
    soundButtons = sound("Main", game)

    var buttonClose = new button(game, 335, 500, 90, 90, document.getElementById('btn-exit'))
    buttonClose.onaction = function () {
        warningScreen(game)
    }

    var buttonRetry = new button(game, 448, 500, 108, 108, document.getElementById('btn-retry'))
    buttonRetry.onaction = function () {
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

    return [
        new background(game, document.getElementById('backs-lose')),
        new widget(game, 225, 250, 420, 400),
        new textfield(game, 337, 250, 250, 50, false, "NICK:  " + game.curPlayer),
        new textfield(game, 337, 310, 250, 50, false, "SCORE: " + game.rozdiel + "left x 10"),
        new textfield(game, 337, 370, 250, 50, false, "LVL:  " + game.curPlayerScore),
        new textfield(game, 337, 430, 250, 50, false, "ALL:  " + game.playerScore),
        buttonClose,
        buttonRetry,
        soundButtons[1],
        soundButtons[2]
    ];
}