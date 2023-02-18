function level2(game) {
    var imgFirstLvl = document.getElementById('backs-lvl1')
    var imgBird = document.getElementById('red1')
    var imgBird1 = document.getElementById('red1-before')
    var imgBird2 = document.getElementById('red2')
    var imgBird3 = document.getElementById('red3')
    var imgPrak = document.getElementById('prak')
    var imgPig1 = document.getElementById('pig1')
    var imgPig1Dead = document.getElementById('pig1-dead')
    var imgPig2 = document.getElementById('pig2')
    var imgPig2almostDead = document.getElementById('pig2-almostDead')
    var imgPig2Dead = document.getElementById('pig2-dead')
    var glassBlock = document.getElementById('glassBlockLive')
    var woodBlock = document.getElementById('woodBlockLive')
    var woodBlock1 = document.getElementById('woodBlockDead1')
    var stone = document.getElementById('stone')

    game.curPlayerScore = 0
    var btnMenu = new button(game, 810, 20, 60, 60, document.getElementById('btn-menu'))
    btnMenu.onaction = function () {
        menuinGame(game)
    }
    var soundsBtn = sound("Main", game)
    soundsBtn[0].pause()

    var newScena = [
        new background(game, imgFirstLvl),
        new widget(game, 0, 0, 350, 60),
        new textfield(game, 0, 0, 150, 50, false, game.curPlayer + ": "),
        new textfield(game, 150, 0, 150, 60, "score", "random"),
        new textfield(game, 220, 0, 150, 60, "rozdiel", "random"),
        soundsBtn[1],
        soundsBtn[2],
        btnMenu,
        new prak(game, 80, 448, 60, 170, imgPrak),
        new wall(game, 820, 530, 80, 80, 2, [stone,stone,stone]),
        new wall(game, 745, 530, 80, 80, 2, [stone,stone,stone]),
        new wall(game, 820, 457, 80, 80, 2, [stone, stone, stone]),
        new wall(game, 745, 457, 80, 80, 0, [glassBlock]),
        new wall(game, 745, 379, 80, 80, 0, [glassBlock]),

        new wall(game, 556, 460, 80, 80, 1, [woodBlock1, woodBlock]),
        new wall(game, 480, 534, 80, 80, 1, [woodBlock1, woodBlock]),
        new wall(game, 478, 385, 80, 80, 1, [woodBlock1, woodBlock]),
        new wall(game, 480, 460, 80, 80, 0, [glassBlock]),
        new wall(game, 556, 534, 80, 80, 0, [glassBlock]),
        new wall(game, 554, 385, 80, 80, 0, [glassBlock]),
       
        new pigs(game, 685, 550, 60, 60, 2, [imgPig2Dead, imgPig2almostDead, imgPig2]),
        new pigs(game, 405, 550, 60, 60, 1, [imgPig1Dead, imgPig1]),
        new pigs(game, 828, 405, 60, 60, 1, [imgPig1Dead, imgPig1]),
        new box(game, 10, 370, 150, 170),
        new birds(game, 70, 428, 60, 60, [imgBird3, imgBird2, imgBird1, imgBird], 0)
    ]
    //
    //nastavenie levela
    game.nodes = newScena
    game.level = 2
    game.lvlOrder = [1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0]
    game.maxAtmp = game.lvlOrder.length
    game.rozdiel = game.lvlOrder.length
    game.inLevel = true
    
}