

// Simple Widget implementation od Ing. Peter Kapec, PhD. z PRED
class widget extends gameObject {
    constructor(game, x, y, w, h) {
        // Construct Node
        super(game, x, y, w, h);

        this.x = x
        this.y = y
        this.width = w
        this.height = h
        this.rotation = 0
        this.visible = true
        this.focus = false
        this.border = true
    }

    // Drawing widgets using canvas
    draw(ctx) {
        if (!this.visible) return

        // Each widget contained in its parent
        ctx.save()

        ctx.translate(this.x, this.y)
        ctx.rotate(this.rotation)
        ctx.beginPath()
        ctx.rect(0, 0, this.width, this.height)
        ctx.clip()

        // Draw border
        if (this.border) {
            ctx.beginPath()
            ctx.fillStyle = "#dfad9f"
            ctx.fillRect(0, 0, this.width, this.height)
            ctx.lineWidth = 5
            ctx.stroke()
        }

        // Draw
        this.ondraw(ctx)
        // Send draw event to other Widgets
        this.notify("draw", ctx)

        ctx.restore()
    }

    ondraw(ctx) { }

    // Click handling
    onmouseDown(point){
        if (!this.visible) return

        if ((this.x < point.x && point.x < this.width + this.x) &&
            (this.y < point.y && point.y < this.height + this.y)) {
                this.focus = true
                this.onclick(point)
            } else
                this.focus = false

        this.notify("mouseDown", point)
    }

    onclick(point) { }

    // Keyboard handling
    key(key) {

        if (!this.visible) return

        if (this.focus) {
            console.log('Widget')
            this.onkey(key)
        }

        // Send key message to other Widgets
        this.notify("key", key)
    }

    onkey(key) { }
}