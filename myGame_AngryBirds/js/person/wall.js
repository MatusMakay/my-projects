class wall extends person {
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
    oncheckColision(bird) {
        if (bird == undefined) {
            for (var i in this.game.nodes) {
                var newbird = this.game.nodes[i]
                if (newbird instanceof birds) {
                    bird = newbird
                    break
                }
            }
        }
        //sledovanie kolizie s vtakom
        if (bird.maxSpring == false && this.dead == false && bird.die == false) {
            if (bird.x + bird.width >= this.x + 15 && bird.y + bird.height - 5 >= this.y + 5 && this.x + this.width >= bird.x && this.y + this.height >= bird.y)
            {
                //
                //GLASS
                if (this.maxLive == 0)
                {
                    //RED
                    if (bird.superPower == 0) {
                        if (bird.die == false) {
                            bird.state -= 1
                        }
                        this.onaction()
                        this.birdhitObject(bird)
                        bird.dv_x *= -1
                        bird.dv_y = bird.dv_y < 0 ? (bird.dv_y * -1 + 15) : bird.dv_y + 15
                        this.game.curPlayerScore += 15
                    }
                    //BIG
                    if (bird.superPower == 1) {
                        //
                        //poskodeny BIG
                        if (bird.IDK == 1) {
                            if (bird.die == false) {
                                bird.state -= 1
                            }
                            this.birdhitObject(bird)
                            bird.dv_x *= -1
                            bird.dv_y = bird.dv_y < 0 ? (bird.dv_y * -1 + 15) : bird.dv_y + 15
                            bird.IDK++
                            this.onaction()
                            this.game.curPlayerScore += 15
                        }
                        //
                        //Uplne zdravy
                        if (bird.IDK == 0) {
                            //pridám naraz pre BIG
                            bird.IDK++
                            //znicit stenu hned

                            if (this.game.soundEfect == 1 && this.maxLive == 0) {
                                var sound = document.getElementById('glassWallDestroyed')
                                sound.play()
                            }
                            this.game.remove(this)
                            this.game.curPlayerScore += 15
                        }
                    }
                }
                //
                //WOOD
                else if (this.maxLive == 1) {
                    if (this.game.soundEfect == 1) {
                        var sound = document.getElementById('woodWallHit')
                        sound.play()
                    }

                    //BIG
                    if (bird.superPower == 1) {
                        //ak narazi uplne zdravy BIG do uplne zdravej steny hned zomrie
                        if ((this.live == 1 && bird.IDK == 0) || (bird.IDK == 1 && this.live == 0)) {
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
                            this.game.curPlayerScore += 20
                        }
                        //ak narazi uplne zdravy BIG do ponièenej steny
                        else if (this.live == 0 && bird.IDK == 0) {
                            //stena deadAnimation true
                            //vtak leti dalej
                            if (this.game.soundEfect == 1 && this.maxLive == 1) {
                                var sound = document.getElementById('woodWallDestroyed')
                                sound.play()
                            }
                            this.game.remove(this)
                            
                            //zvysenie premennej ktora urèuje smrt 
                            bird.IDK++
                            this.game.curPlayerScore += 20

                        }
                        //ak narazi poškodeny Big do uplne zdravej steny
                        else if (bird.IDK == 1 && this.live == 1) {
                            if (bird.die == false) {
                                bird.state -= 1
                            }
                            this.onaction() //ubratie života stene
                            //smrt vtaka
                            this.birdhitObject(bird)
                            bird.dv_x *= -1
                            bird.dv_y = bird.dv_y < 0 ? (bird.dv_y * -1 + 15) : bird.dv_y + 15
                        }
                        
                    }
                    //
                    //RED
                    else if (bird.superPower == 0) {
                        if (bird.die == false) {
                            bird.state -= 1
                        }
                        this.onaction()
                        this.birdhitObject(bird)
                        bird.dv_x *= -1
                        bird.dv_y = bird.dv_y < 0 ? (bird.dv_y * -1 + 15) : bird.dv_y + 15
                    }
                }
                //
                //Stone
                else if (this.maxLive == 2) {
                    if (bird.die == false) {
                        bird.state -= 1
                    }
                    this.birdhitObject(bird)
                    bird.dv_x *= -1
                    bird.dv_y = bird.dv_y < 0 ? (bird.dv_y * -1 + 15) : bird.dv_y + 15
                }
            }
            else {
                this.checkColision("checkColision", bird)
            }
        }
    }
    //Dead animacia
    oncheckDead() {
        if (this.dead == true) {
            this.colapse += 1
            if (this.live < 1) {
                if (this.colapse == 100) {
                    this.live++
                }
            }

            if (this.live >= 1) {
                if (this.colapse % 80 == 0) {
                    this.live++
                }
            }
            if (this.live == 2) {
                if (this.colapse % 60 == 0) {
                    if (this.game.soundEfect == 1 && this.maxLive == 0) {
                        var sound = document.getElementById('glassWallDestroyed')
                        sound.play()
                    }
                    if (this.game.soundEfect == 1 && this.maxLive == 1) {
                        var sound = document.getElementById('woodWallDestroyed')
                        sound.play()
                    }
                    this.game.remove(this)
                } 

            }
        }
        
    }
    //menenie obrazkov po náraze
    onaction() {
        if (this.live == 0) {
            if (this.game.soundEfect == 1 && this.maxLive == 0) {
                var sound = document.getElementById('glassWallHit')
                sound.play()
            }

            this.objectDie(this)
            this.dead = true
            this.game.curPlayerScore += 20

        }

        if (this.live > 0) {
            this.live -= 1;
            if (this.game.soundEfect == 1) {
                var sound = document.getElementById('woodWallHit')
                sound.play()
            }
        }
    }

    //
    //View
    ondraw(ctx) {
        ctx.drawImage(this.img[this.live], this.x, this.y, this.width, this.height)
    }
}