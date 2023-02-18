function gameCopleted(game) {
    saveonServer(game.curPlayer, game.playerScore, "post")
    document.querySelector('#btn').addEventListener('click', function () {
        game.curPlayerScore = 0
        game.playerScore = 0
        game.nodes = mainScreen(game)
        var form = document.getElementById('form')
        form.style.margin = "-500px 0px 0px 900px"
    });

    var soundButtons = []
    soundButtons = sound("Main", game)
    soundButtons[0].pause()

    return [
        new background(game, document.getElementById('backs-won')),
        new widget(game, 225, 250, 420, 400),
        new textfield(game, 225, 250, 420, 50, false, "Congratulation, press Confirm"),
        new textfield(game, 337, 310, 250, 50, false, "NICK:  " + game.curPlayer),
        new textfield(game, 337, 370, 250, 50, false, "SCORE: " + game.rozdiel + "left x 10"),
        new textfield(game, 337, 430, 250, 50, false, "LVL:  " + game.curPlayerScore),
        new textfield(game, 337, 490, 250, 50, false, "ALL:  " + game.playerScore),
        soundButtons[1],
        soundButtons[2],
    ];
}