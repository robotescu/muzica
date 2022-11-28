input.onButtonPressed(Button.A, function () {
    music.setVolume(music.volume() + 20)
})
input.onButtonPressed(Button.B, function () {
    music.changeTempoBy(20)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.setTempo(120)
    music.setVolume(127)
    for (let index = 0; index < 4; index++) {
        music.playMelody("E B C5 A B G A F ", music.tempo())
    }
})
basic.forever(function () {
	
})
