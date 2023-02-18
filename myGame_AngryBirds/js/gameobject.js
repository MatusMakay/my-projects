
class gameObject extends node {
    constructor(game, x, y, width, height) {
        super()
        this.game = game // kaûd· vetva mÙûe ziskaù pristup k objektu game
        this.x = x
        this.y = y
        this.width = width
        this.height = height
    }
    key(key) {
        this.notify("key", key)
    }

    move(dt) {
        this.onmove(dt)
        this.notify("move", dt)
    }

    draw(ctx) {
        this.ondraw(ctx)
        this.notify("draw", ctx)
    }

    mouseDown(point) {
        this.onmouseDown(point)
        this.notify("onmouseDown", point)
    }

    mouseMove(event) {
        this.onmouseMove(event)
        this.notify("mouseMove", event)
    }

    mouseUp() {
        this.onmouseUp()
        this.notify("mouseUp")
    }

    checkColision(bird) {
        this.oncheckColision(bird)
        this.notify("checkColision", bird)
    }


    checkDead() {
        this.oncheckDead()
        this.notify("checkDead")
    }

    onmove(dt) { }

    ondraw(ctx) { }

    onmouseDown(point) { }

    onmouseMove(newPos) { }

    oncheckColision(bird) { }

    onmouseUp() { }

    oncheckDead() { }

    onkey(key) { }


}