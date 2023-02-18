function instructionScreen(game) {
    var soundButtons = []
    soundButtons = sound("Main", game)
    var buttonCloseInt = new button(game, 30, 30, 70, 70, document.getElementById('btn-exit'))
    buttonCloseInt.onaction = function () {
        this.changeScena("mainScreen")
    }
    return [
        new background(game, document.getElementById('backs-instruction')),
        buttonCloseInt,
        soundButtons[1],
        soundButtons[2]
    ];
}