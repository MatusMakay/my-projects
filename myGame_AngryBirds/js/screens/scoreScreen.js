
//
//NEFUNGUJE
function scoreScreen(game) {
    console.log('Som v score screen')
   // var fs = require('fs')  
    //var fs
    var soundButtons = []
    var score = document.getElementById('score')
    console.log(score)
    soundButtons = sound("Main", game)

    var buttonCloseScore = new button(game, 30, 30, 70, 70, document.getElementById('btn-exit'))

    buttonCloseScore.onaction = function () {
        this.changeScena("mainScreen")
    }
    console.log('Som na konci scoreScreen')
    var newScreen = [
        new background(game, document.getElementById('backs-main')),
        buttonCloseScore,
        soundButtons[1],
        soundButtons[2],
    ]
}
