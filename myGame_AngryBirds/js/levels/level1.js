function level1(game) {
    console.log('vykonavam level1')
    var imgFirstLvl = document.getElementById('backs-lvl1')
    var imgBird = document.getElementById('red1')
    var imgBird1 = document.getElementById('red1-before')
    var imgBird2 = document.getElementById('red2')
    var imgBird3 = document.getElementById('red3')
    var imgPrak = document.getElementById('prak')
    var imgPig1 = document.getElementById('pig1')
    var imgPig1Dead = document.getElementById('pig1-dead')

    var glassWall = document.getElementById('glassWallLive')
    var glassBlock = document.getElementById('glassBlockLive')

    game.curPlayerScore = 0
    var btnMenu = new button(game, 810, 20, 60, 60, document.getElementById('btn-menu'))
    btnMenu.onaction = function () {
        menuinGame(game)
    }
    var soundsBtn = sound("Main", game)
    soundsBtn[0].pause()

    var level1 = [
        new background(game, imgFirstLvl),
        new widget(game, 0, 0, 350, 60),
        new textfield(game, 0, 0, 150, 50, false, game.curPlayer + ": "),
        new textfield(game, 150, 0, 150, 60, "score", "random"),
        new textfield(game, 220, 0, 150, 60, "rozdiel", "random"),
        soundsBtn[1],
        soundsBtn[2],
        btnMenu,
        new prak(game, 80, 448, 60, 170, imgPrak),
        new wall(game, 450, 530, 80, 80, 0, [glassBlock]),
        new wall(game, 450, 455, 80, 80, 0, [glassBlock]),
        new wall(game, 450, 435, 340, 25, 0, [glassWall]),
        new wall(game, 710, 530, 80, 80, 0, [glassBlock]),
        new wall(game, 710, 455, 80, 80, 0, [glassBlock]),
        new pigs(game, 545, 550, 60, 60, 1, [imgPig1Dead, imgPig1]),
        new pigs(game, 635, 550, 60, 60, 1, [imgPig1Dead, imgPig1]),
        new box(game, 10, 370, 150, 170),
        new birds(game, 70, 428, 60, 60, [imgBird3, imgBird2, imgBird1, imgBird], 0),]

    //
    //nastavenie levela
    game.lvlOrder = [1, 0, 1, 0, 0]
    game.maxAtmp = game.lvlOrder.length
    game.rozdiel = game.lvlOrder.length
    game.nodes = level1
    console.log("vypisujem game nodes z level 1")
    console.log(game.nodes)
    game.level = 1
    game.inLevel = true
}
