// app bude všetko riadit, -> bude v nej funckia loop() a onloop() -> služi na zacyklenie programu
// vychadzam z GAME od kapca
class app extends gameObject {
	constructor(canvas, mouse) {
		super(undefined, 0, 0, canvas.width, canvas.height)
		this.canvas = canvas
		this.ctx = canvas.getContext("2d")
		this.time = Date.now() //vobec nechapem
		this.mouse = mouse
		var game = this 
		this.loop = function () {
			game.onloop() //konretne vykonanie
		}
		this.startScreen = function () {
			//naplnim nodes mainScreenom
			this.fillMainScreen();
		}
		//spusta kontrolu lvl funkci
		this.inLevel = false;
		//urèuje v akom som lvl -> potrebne pre retry continue
		this.level = false
		this.bird = undefined
		this.soundEfect = false
		//
		//Pre lvly
		this.maxAtmp = 0
		this.atmp = 0
		this.lvlOrder = undefined
		//sleduje vyhru
		this.count = 0
		//
		//nick-Score
		this.curPlayer = undefined
		this.curPlayerScore = 0
		this.playerScore = 0
		this.rozdiel = undefined
		this.score = undefined
	}
	onloop() {
		var now = Date.now()
		var dt = (now - this.time) / 100
		this.time = now
		//
		//Controller
		//
		if (this.inLevel) {
			this.checkWin(this.nodes)
			if (this.bird == undefined) {
				this.findBird(this.nodes)
			}
			//this.checkColision(this.nodes[this.nodes.length - 1])
			this.checkColision(this.bird)
			this.checkDead()
			this.move(dt)
		}
		//
		//View
		//
		this.draw(this.ctx)

		requestAnimationFrame(this.loop)
	}

	findBird(nodes) {
		for (var i in nodes) {
			var bird = nodes[i]
			if (bird instanceof birds) {
				this.bird = bird
            }
        }
	}

	//
	//INIT-VSTUPOV (Controller)
	start() {
		var app = this
		//
		//spracovanie vstupov z myši od Ing. Peter Kapec, PhD. z PRED
		app.canvas.onmousedown = function (event) {
			app.mouse.pressed = true
			var point = {
				x: event.pageX - app.canvas.offsetLeft,
				y: event.pageY - app.canvas.offsetTop
			}

			app.mouseDown(point)
		}
		app.canvas.onmouseup = function (event) {
			app.mouseUp()
			//najskor zavolam funkciu potom odstranim
			app.mouse.pressed = false
			app.mouse.selected = false
        }
		app.canvas.onmousemove = function (event) {
			app.mouseMove(event)
		}

		//
		//stlacenie klavesy od Ing. Peter Kapec, PhD. z PRED
		window.onkeydown = function (event) {

			// Prevent browser from handling backspace key press
			event.cancelBubble = true
			if (event.stopPropagation) {
				event.stopPropagation()
			}
			// Send key message
			app.key(event)

			return false
		}
	}

	//poèita pigs a kontroluje poèet pokusov
	checkWin(nodes) {
		var count = 0
		for (var index in nodes) {
			var person = this.nodes[index]
			if (person instanceof pigs) {
				if(person.dead == false)
				count++;
			}
		}
		this.rozdiel = this.maxAtmp - this.atmp
		if (count == 0) {
			this.inLevel = false;
			this.lvlOrder = undefined
			this.curPlayerScore += this.rozdiel * 10
			this.nodes = lvlCompleted(this);
			this.atmp = 0
			this.bird = undefined
        }
		if (this.atmp == this.maxAtmp) {
			this.atmp = 0
			this.inLevel = false
			this.lvlOrder = undefined
			this.nodes = gameoverScreen(this)
			this.bird = undefined
        }
    }
	//
	//INIT-MainScreen
	fillMainScreen() {

		this.nodes = mainScreen(this)
    }
}