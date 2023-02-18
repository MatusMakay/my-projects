
//Nefunguje
function sound(statement, game) {
    var mySound = document.getElementById('soundMain')
    var btnSoundOn = new button(game, 20, 659, 35, 35, document.getElementById('btn-soundOn'))
    var btnMusicOn = new button(game, 65, 659, 35, 35, document.getElementById('btn-musicOn'))
    btnSoundOn.onaction = function () {
        mySound.play()
        game.remove(btnSoundOn)
        sound("removeOn", game)
    }

    btnMusicOn.onaction = function () {
        game.soundEfect = 1
        game.remove(btnMusicOn)
        sound("removeMusicOn", game)
    }

    switch (statement) {

        case "Main":
            return [
                mySound,
                btnSoundOn,
                btnMusicOn
            ];
            break

        case "removeOn":
            var btnSoundOff = new button(game, 20, 659, 35, 35, document.getElementById('btn-soundOff'))

            btnSoundOff.onaction = function () {
                mySound.pause()
                game.remove(btnSoundOff)
                sound("addOn", game)
            }

            game.add(btnSoundOff)
            break

        case "addOn":
            game.add(btnSoundOn)
            break

        case "removeMusicOn":
            var btnMusicOff = new button(game, 65, 659, 35, 35, document.getElementById('btn-musicOff'))

            btnMusicOff.onaction = function () {
                game.soundEfect = 0
                game.remove(btnMusicOff)
                sound("addMusicOn", game)
            }

            game.add(btnMusicOff)
            break

        case "addMusicOn":
            game.add(btnMusicOn)
            break
    }
    game.bird = undefined
}