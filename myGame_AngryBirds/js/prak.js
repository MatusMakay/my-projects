class prak extends gameObject {
    constructor(game, x, y, w, h, img) {
        super(game, x, y, w, h)
        this.img = img
    }
    //View
    ondraw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
}