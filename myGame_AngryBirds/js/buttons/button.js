class button extends gameObject {
    constructor(game, x, y, w, h, img) {
        super(game, x, y, w, h)
        this.img = img
    }
    //
    //Controller
    onmouseDown(point) { 
        if ((this.x < point.x && point.x < this.width + this.x) &&
            (this.y < point.y && point.y < this.height + this.y)) {
            this.game.mouse.pressed = false
            this.onaction()
        }
        else
            this.notify("mouseDown", point)
    }

    changeScena(nameScena) {
        scena(this.game, nameScena)
    }
   
    onaction() { }

    //
    //View
    ondraw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
    
}