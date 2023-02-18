// Textfield od Ing. Peter Kapec, PhD. z PRED
class textfield extends widget {
    constructor(game,x, y, w, h, canWrite, text) {

        super(game, x, y, w, h)
        this.canWrite = canWrite
        this.text = text
        this.count = 0
    }
    //View
    ondraw(ctx) {
        if (this.canWrite == true) {
            ctx.fillStyle = "white"
            if (this.focus) {
                ctx.fillStyle = "yellow"
            }
            ctx.fillRect(0, 0, this.width, this.height)
        }
        if (this.canWrite == "score") {
            this.text = this.game.curPlayerScore
        }
        if (this.canWrite == "rozdiel") {
            this.text ="Left: " + this.game.rozdiel
        }
        ctx.font = "30px Arial"
        if (this.focus && this.canWrite) {
            ctx.fillStyle = "red"
            ctx.fillText(this.text + "_", 5, 35)
        }
        ctx.fillStyle = "black"
        ctx.fillText(this.text, 5, 35)
    }
    //Controller
    // Handle keyboard
    onkey(event) {
        if (this.canWrite) {
            var key = event.which
            if (this.count % 2 == 0) {
                switch (key) {
                    case 8:
                        this.text = this.text.substring(0, this.text.length - 1);
                        break;
                    case 13:
                        this.action()
                        break;
                    default:
                        this.text += (String.fromCharCode(key+32))
                }
            }
        }
    }

    action() { }
}