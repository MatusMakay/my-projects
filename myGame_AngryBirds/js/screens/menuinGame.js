function menuinGame(game) {
    game.inLevel = false

    var imgButtonContinue = document.getElementById('btn-continueLevel')
    var imgButtonRetry = document.getElementById('btn-retryLevel')
    var imgButtonQuit= document.getElementById('btn-quitLevel')

    var container = new widget(game, 245, 190, 420, 350)
    

    var buttonContinue = new button(game, 325, 287, 260 , 50, imgButtonContinue)
    buttonContinue.onaction = function () {
        game.remove(container)
        game.remove(buttonContinue)
        game.remove(buttonRetry)
        game.remove(buttonQuit)
        this.game.inLevel = true
    }
    var buttonRetry = new button(game, 325, 339, 260 , 50, imgButtonRetry)
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

    var buttonQuit = new button(game, 325, 390, 260, 50, imgButtonQuit)
    buttonQuit.onaction = function () {
        game.inLevel = false;
        warningScreen(game)
    }

    game.add(container)
    game.add(buttonContinue)
    game.add(buttonRetry)
    game.add(buttonQuit)
}