function lvlCompleted(game) {

    var soundButtons = []
    soundButtons = sound("Main", game)
    soundButtons[0].pause()
    //pripocitanie score
    
   
    var buttonCloseLvl = new button(game, 20, 20, 70, 70, document.getElementById('btn-exit'))

    buttonCloseLvl.onaction = function () {
        saveonServer(game.curPlayer, game.playerScore)
        warningScreen(game)
    }

    var buttonRetry = new button(game, 448, 500, 108, 108, document.getElementById('btn-retry'))
    buttonRetry.onaction = function () {
        game.playerScore -= game.curPlayerScore
        game.curPlayerScore = 0
        game.inLevel = true;
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
    }

    var buttonContinue = new button(game, 335, 500, 90, 90, document.getElementById('btn-nextLvl'))
    buttonContinue.onaction = function () {
        game.playerScore += game.curPlayerScore
        game.inLevel = true
        game.level++
        if (game.level < 4) {
            switch (game.level) {
                case 2:
                    this.changeScena("2level")
                    break
                case 3:
                    this.changeScena("3level")
                    break
            }
        }
        else {
            game.inLevel = false
            game.nodes = gameCopleted(game)
        }
        game.bird = undefined
    }

    return [
        new background(game, document.getElementById('backs-won')),
        new widget(game, 225, 250, 420, 400),
        new textfield(game, 337, 250, 250, 50, false, "NICK:  "+game.curPlayer),
        new textfield(game, 337, 310, 250, 50, false, "SCORE: " + game.rozdiel + "left x 10"),
        new textfield(game, 337, 370, 250, 50, false, "LVL:  " + game.curPlayerScore),
        new textfield(game, 337, 430, 250, 50, false, "ALL:  "+game.playerScore),
        buttonCloseLvl,
        buttonRetry,
        buttonContinue,
        soundButtons[1],
        soundButtons[2],
    ];
}