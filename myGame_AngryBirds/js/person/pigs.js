class pigs extends person {
    constructor(game, x, y, w, h, live, img = []) {
        super(game, x, y, w, h)
        this.img = img
        this.live = live
        this.maxLive = live
        this.dead = false
        this.colapse = 0
    }
    //
    //Controller
    oncheckColision(bird)
    {
        //kvoli menu
        if (bird == undefined) {
            for (var i in this.game.nodes) {
                var newbird = this.game.nodes[i]
                if (newbird instanceof birds) {
                    bird = newbird
                    break
                }
            }
        }
        if (bird.maxSpring == false && this.dead == false && bird.die == false) {
            if (bird.x + bird.width >= this.x + 15 && bird.y + bird.height >= this.y + 15 && this.x + this.width >= bird.x + 15 && this.y + this.height >= bird.y + 15)
            {
                //PIG s jednym životom
                if (this.maxLive == 1) {
                    //RED
                    if (bird.superPower == 0) {
                        if (bird.die == false) {
                            bird.state -= 1
                        }
                        this.onaction()
                        this.birdhitObject(bird)
                        bird.dv_x *= -1
                        bird.dv_y = bird.dv_y < 0 ? (bird.dv_y * -1 + 15) : bird.dv_y + 15
                        this.game.curPlayerScore += 100
                    }

                    //BIG
                    if (bird.superPower == 1) {
                        //BIG narazi do PIGA s jednym životom
                            //ak zdravy BIG narazi do PIGA 
                        if (bird.IDK == 0) {
                            //zabit prasa
                            this.onaction()
                            //zvyši bird.IKD
                            bird.IKD++
                            this.game.curPlayerScore += 100
                        }
                        //poškodeny BIG do PIGA
                        else if (bird.IDK == 1) {
                            if (bird.die == false) {
                                bird.state -= 1
                            }
                            this.onaction() //smrt prasata
                            //smrt vtaka
                            this.birdhitObject(bird)
                            bird.dv_x *= -1
                            bird.dv_y = bird.dv_y < 0 ? (bird.dv_y * -1 + 15) : bird.dv_y + 15
                            this.game.curPlayerScore += 100
                        }
                    }
                }
                //PIG s dvoma životmi
                else if (this.maxLive == 2)
                {
                    //BIG
                    if (bird.superPower == 1) {
                        //uplne zdravý PIG s uplne zdravím BIGOM ale poškodeny s poškodenym
                        if ((this.live == 2 && bird.IDK == 0) || (this.live == 1 && bird.IDK == 1)) {
                            //smrt obidvoch
                            if (bird.die == false) {
                                bird.state -= 1
                            }
                            //Znièenie steny aj vtáka naraz
                            this.objectDie(this)
                            this.dead = true
                            //znicenie vtaka
                            this.birdhitObject(bird)
                            bird.dv_x *= -1
                            bird.dv_y = bird.dv_y < 0 ? (bird.dv_y * -1 + 15) : bird.dv_y + 15
                            this.game.curPlayerScore += 150
                        }
                        //uplne zdravy PIG s poškodenym BIGOM
                        if (this.live == 2 && bird.IDK == 1) {
                            if (bird.die == false) {
                                bird.state -= 1
                            }
                            this.onaction() //ubratie života pigovi
                            //smrt vtaka
                            this.birdhitObject(bird)
                            bird.dv_x *= -1
                            bird.dv_y = bird.dv_y < 0 ? (bird.dv_y * -1 + 15) : bird.dv_y + 15
                        }
                        //uplne zdravy BIG s poškodenym PIGOM
                        if (this.live == 1 && bird.IDK == 0) {
                            this.onaction() //smrt prasiatka
                            this.game.curPlayerScore += 100
                            bird.IDK++
                        }
                    }
                    //RED
                    else if (bird.superPower == 0) {
                        if (bird.die == false) {
                            bird.state -= 1
                        }
                        this.onaction() //ubratie života pigovi
                        //smrt vtaka
                        this.birdhitObject(bird)
                        bird.dv_x *= -1
                        bird.dv_y = bird.dv_y < 0 ? (bird.dv_y * -1 + 15) : bird.dv_y + 15
                    }
                }
            }
            else {
                this.checkColision("checkColision", bird)
            } 
        }   
    }
    //dead animacia
    oncheckDead() {
        if (this.dead == true) {
            this.colapse += 1

            if (this.live < 1) {
                if (this.colapse == 400) {
                    this.live++
                }
            }
            if (this.live >= 1) {
                if (this.colapse % 18 == 0 && this.colapse > 0) {
                    this.live++
                }
            }
            if (this.live == 4) {
                if (this.game.soundEfect == 1) {
                    var sound = document.getElementById('pigDie')
                    sound.play()
                }
                this.game.remove(this)
            }
        }
    }
    //menenie obrazkov
    onaction() {
        if (this.live > 0) {
            this.live -= 1;
            if (this.game.soundEfect == 1) {
                var sound = document.getElementById('pigHit')
                sound.play()
            }
        }

        if (this.live == 0) {
            this.dead = true
            this.objectDie(this)
        }

    }

    //
    //View
    ondraw(ctx) {
        ctx.drawImage(this.img[this.live], this.x, this.y, this.width, this.height)
    }
}

