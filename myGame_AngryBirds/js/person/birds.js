class birds extends person{
    constructor(game, x, y, w, h, img, superPower) {
        super(game, x, y, w, h)
        this.img = img
        this.superPower = superPower
        this.IDK = 0
        this.maxSpring = false
        this.shoot = false
        this.state = 3
        this.dv_x = this.x
        this.dv_y = this.y
        this.die = false
        this.dieAnimation = false
        this.colapse = 0
        this.play = 1
        this.inGame = false
    }

    //
    //Controller
    //
    onmouseDown(point) {
        if ((this.x < point.x && point.x < this.width + this.x) &&
            (this.y < point.y && point.y < this.height + this.y) && this.game.inLevel == true) {
            this.game.mouse.selected = this
            if (this.inGame == false) {
                this.state -= 1
            }
                if (this.game.soundEfect == 1) {
                    var sound = document.getElementById('birdSelect')
                    sound.play()
                }
                this.inGame = true
        }
    }

    onmouseMove(event) {
        if (this.game.mouse.pressed) {
            if (this.game.mouse.selected) {
                this.x = event.pageX - canvas.offsetLeft - 30
                this.y = event.pageY - canvas.offsetTop - 30
            }
        }
    }

    onmouseUp() {
        if (this.game.mouse.selected && this.game.mouse.pressed == true && this.shoot ==false) {
            this.dv_x = this.dv_x + 15 - this.x 
            this.dv_y = (this.dv_y + 25) - this.y 
            this.state -= 1
            this.shoot = true
            this.maxSpring = false
            console.log(this)
            if (this.game.soundEfect == 1) {
                var sound = document.getElementById('birdFlying')
                sound.play()
            }
        }
    }

    //sledovanie vt�ka v Objekte box
    oncheckColision() {

        if (!this.shoot) {
            for (var i in this.game.nodes) {
                var Box = this.game.nodes[i]
                if (Box instanceof box) {
                    break
                }
            }
            if (this.x >= Box.x && this.x + this.width <= Box.x + Box.width && this.y >= Box.y && this.y + this.height <= Box.y + Box.height) {
                this.maxSpring = false
            }
            else {
                this.maxSpring = true
                if (this.x < Box.x) {
                    this.x = Box.x
                }
                if (this.x > Box.x + Box.width) {
                    this.x = Box.x + Box.width - 1
                }
                if (this.y < Box.y) {
                    this.y = Box.y
                }
                if (this.y > Box.y + Box.height) {
                    this.y = Box.y + Box.height
                }

            }
        }
    }
    //vystrelenie
    onmove() {

        //spravanie po vystreleni
        if (this.shoot) {
            this.x += this.dv_x / 16
            this.y += this.dv_y / 16 
        }
        //ak je mimo kanvas
        if (this.x > this.game.canvas.width || this.x < -21) {
            this.game.remove(this)
            this.game.bird=undefined
            this.setBird()
        }

        if (this.y > this.game.canvas.height || this.y < 0) {
            this.game.remove(this)
            this.game.bird=undefined
            this.setBird()
        }
        //

        //ked narazi do objektu
        if (this.die == true) {
            //zastavujem pohyb
            this.dv_x = this.dv_x / (11/10)
        }
        //kontrola zrazenia so zemou
        if (this.shoot) {
            if (this.y > 550)
            {
                //zastavujem pohyb
                this.dv_y = 0
                this.dv_x = this.dv_x / (11 / 10)
                if (this.die == false) {
                    this.state -= 1
                }
                this.birdhitObject(this)

                if (this.game.soundEfect == 1 && this.play == 1) {
                    var sound = document.getElementById('birdHit')
                    sound.play()
                    this.play--
                }

            }
        }
        if (this.die == true && (this.dv_x >= -1 && this.dv_x <= 1 && this.dv_y >= -1 && this.dv_y <= 1)) {
            //trigerne dead animaciu
            this.dv_x = 0
            this.dv_y = 0
            this.dieAnimation = true
            this.objectDie(this)
        }
    }

    //dead animacia
    oncheckDead() {
        if (this.dieAnimation == true) {
            this.colapse += 1

            if (this.state < 1) {
                if (this.colapse == 100) {
                    this.state++
                }
            }

            if (this.state >= 1) {
                if (this.colapse % 18 == 0 && this.colapse > 0) {
                    this.state++
                }
            }

            if (this.state == 4) {
                if (this.game.soundEfect == 1) {
                    var sound = document.getElementById('birdDie')
                    sound.play()
                }
                this.game.remove(this)
                this.setBird()
                this.game.bird = undefined
            }

        }
    }

    //
    //View
    //
    ondraw(ctx) {
        ctx.drawImage(this.img[this.state], this.x, this.y, this.width, this.height)
    }
}
