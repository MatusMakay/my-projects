class background extends gameObject {
    constructor(game,img) {
        super(game, 0, 0, canvas.width, canvas.height)
        this.img = img
    }
    //View
    ondraw(ctx) {
        ctx.drawImage(this.img, 0, 0, this.width, this.height)
    }
}