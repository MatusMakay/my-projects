function addplayer(game) {

    var imgButtonContinue = document.getElementById('btn-continueLevel')

    var buttonContinue = new button(game, 305, 380, 260, 50, imgButtonContinue)
    buttonContinue.onaction = function () {
        //add Player name
        console.log('volam z addplayer level1')
        game.curPlayer = nick.text
        level1(game)
    }
    var nick = new textfield(game, 295, 270, 285, 60, true, "Nick")
    var addPlayer = [
        new background(game, document.getElementById('backs-main')),
        new widget(game, 215, 140, 450, 380),
        buttonContinue,
        nick,
        new textfield(game, 295, 165, 285, 60, false, "Choose your nick!!")
    ]

    game.nodes = addPlayer
    
}