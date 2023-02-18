function mainScreen(game) {
	var soundButtons = []
	soundButtons = sound("Main", game)
	
	var btnStart = new button(game, 320, 180, 229, 190, document.getElementById('btn-start'))
	btnStart.onaction = function () {
		addplayer(game)
	}

	var btnHelp = new button(game, 285, 380, 320, 120, document.getElementById('btn-help'))
	btnHelp.onaction = function () {
		this.changeScena("Instruction")
	}
	return [
		new background(game, document.getElementById('backs-main')),
		btnStart,
		btnHelp,
		soundButtons[1],
		soundButtons[2],
    ];
}