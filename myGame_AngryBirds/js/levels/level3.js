function level3(game) {
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
    var imgPig3 = document.getElementById('pig3')
    var imgPig3almostDead = document.getElementById('pig3-almostDead')
    var imgPig3Dead = document.getElementById('pig3-dead')
    var glassBlock = document.getElementById('glassBlockLive')
    var woodBlock = document.getElementById('woodBlockLive')
    var woodBlock1 = document.getElementById('woodBlockDead1')
    var woodWall1 = document.getElementById('woodWallDead1')
    var woodWall = document.getElementById('woodWallLive')
    var stone = document.getElementById('stone')
    var glassWall = document.getElementById('glassWallLive')

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
        new prak(game, 80, 160, 60, 170, imgPrak),
        new wall(game, 820, 530, 80, 80, 2, [stone, stone, stone]),
        new wall(game, 820, 457, 80, 80, 2, [stone, stone, stone]),
        new wall(game, 820, 387, 80, 80, 2, [stone, stone, stone]),
        new wall(game, 745, 530, 80, 80, 2, [stone, stone, stone]),
        new wall(game, 745, 457, 80, 80, 2, [stone, stone, stone]),
        new wall(game, 745, 387, 80, 80, 2, [stone, stone, stone]),
        new wall(game, 670, 530, 80, 80, 2, [stone, stone, stone]),
        new wall(game, 740, 290, 80, 80, 0, [glassBlock]),

        new wall(game, 505, 530, 80, 80, 2, [stone, stone, stone]),
        new wall(game, 505, 457, 80, 80, 2, [stone, stone, stone]),
        new wall(game, 502, 384, 80, 80, 1, [woodBlock1, woodBlock]),
        new wall(game, 504, 365, 318, 25, 1, [woodWall1, woodWall]),
        new wall(game, 582, 530, 80, 80, 2, [stone, stone, stone]),
        new wall(game, 580, 457, 80, 80, 1, [woodBlock1,woodBlock]),

        new wall(game, -100, 325, 250, 25, 0, [glassWall]),
       
        new pigs(game, 685, 475, 60, 60, 2, [imgPig2Dead, imgPig2almostDead, imgPig2]),
        new pigs(game, 439, 550, 60, 60, 1, [imgPig1Dead, imgPig1]),
        new pigs(game, 510, 307, 60, 60, 1, [imgPig1Dead, imgPig1]),
        new pigs(game, 593, 405, 60, 60, 1, [imgPig1Dead, imgPig1]),
        new pigs(game, 828, 329, 60, 60, 2, [imgPig3Dead, imgPig3almostDead, imgPig3]),
        new box(game, 10, 117, 150, 170),
        new birds(game, 70, 130, 60, 60, [imgBird3, imgBird2, imgBird1, imgBird], 0)
    ]
    //
    //nastavenie levela
    game.nodes = newScena
    game.level = 3
    game.lvlOrder = [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0]
    game.maxAtmp = game.lvlOrder.length
    game.rozdiel = game.lvlOrder.length
    game.inLevel = true
}