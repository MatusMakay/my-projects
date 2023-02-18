class person extends gameObject {
    constructor(game, x, y, w, h) {
        super(game, x, y, w, h)
        this.life = 0
    }
    //
    //Controler
    action() {
        this.onaction()
        this.notify("action")
    }

    birdhitObject(bird) {
        this.onbirdhitObject(bird)
        this.notify("birdhitObject", bird)
    }  

    objectDie(person) {
        this.onobjectDie(person)
        this.notify("objectDie", person)
    }

    setBird()
    {
        if (this.game.level == 1 || this.game.level == 2) {
            if (this.game.lvlOrder[this.game.atmp] == 0) {
                var imgBird = document.getElementById('red1')
                var imgBird1 = document.getElementById('red1-before')
                var imgBird2 = document.getElementById('red2')
                var imgBird3 = document.getElementById('red3')
                this.game.add(new birds(this.game, 70, 428, 60, 60, [imgBird3, imgBird2, imgBird1, imgBird], 0))
            }
            else if (this.game.lvlOrder[this.game.atmp] == 1) {
                var imgBird = document.getElementById('big1')
                var imgBird1 = document.getElementById('big1')
                var imgBird2 = document.getElementById('big2')
                var imgBird3 = document.getElementById('big3')
                this.game.add(new birds(this.game, 70, 428, 60, 60, [imgBird3, imgBird2, imgBird1, imgBird], 1))
            }
        }
        else if (this.game.level == 3) {
            if (this.game.lvlOrder[this.game.atmp] == 0) {
                var imgBird = document.getElementById('red1')
                var imgBird1 = document.getElementById('red1-before')
                var imgBird2 = document.getElementById('red2')
                var imgBird3 = document.getElementById('red3')
                this.game.add(new birds(this.game, 70, 130, 60, 60, [imgBird3, imgBird2, imgBird1, imgBird], 0))
            }
            else if (this.game.lvlOrder[this.game.atmp] == 1) {
                var imgBird = document.getElementById('big1')
                var imgBird1 = document.getElementById('big1')
                var imgBird2 = document.getElementById('big2')
                var imgBird3 = document.getElementById('big3')
                this.game.add(new birds(this.game, 70, 130, 60, 60, [imgBird3, imgBird2, imgBird1, imgBird], 1))
            }
        }
        this.game.atmp++
    }
    
    onaction() { }

    onbirdhitObject(bird) {
        bird.die = true
    }

    onobjectDie(object) {
        var deadthImages = []
        //nastavi pole obrázkov pre dead-animaciu
        var deadObject = object.img[0]
        //Pre pigs a Birds rovnake obrazky
        if (object instanceof pigs || object instanceof birds) {
            deadthImages = [deadObject, document.getElementById('die1'), document.getElementById('die2'), document.getElementById('die3')]
        }
        //pre wall osobitne
        else {
            //Drevo
            if (object.maxLive == 1) {
                if (object.width < 100) { //block
                    deadthImages = [document.getElementById('woodBlockDead1'), document.getElementById('woodBlockDead2'), document.getElementById('woodBlockDead3')]

                }

                if (object.width > 200) { //wall
                    deadthImages = [document.getElementById('woodWallDead1'), document.getElementById('woodWallDead2'), document.getElementById('woodWallDead3')]
                }

            }
            //
            //sklo
            if (object.maxLive == 0) {
                if (object.width < 100) { //block
                    deadthImages = [document.getElementById('glassBlockDead1'), document.getElementById('glassBlockDead2'), document.getElementById('glassBlockDead3')]

                }

                if (object.width > 200) { //wall
                    deadthImages = [document.getElementById('glassWallDead1'), document.getElementById('glassWallDead2'), document.getElementById('glassWallDead3')]
                }
            }
        }
        object.img = deadthImages
    }
}