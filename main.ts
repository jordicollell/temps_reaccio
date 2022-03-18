input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 2; index++) {
        comptador += -1
        basic.showNumber(comptador)
        basic.pause(1000)
    }
    basic.pause(randint(500, 2000))
    basic.showNumber(0)
    temps = control.millis()
    if (input.pinIsPressed(TouchPin.P0)) {
        temps_2 = control.millis()
        basic.showNumber(temps_2 - temps)
    }
})
let temps_2 = 0
let temps = 0
let comptador = 0
comptador = 3
basic.showNumber(comptador)
basic.forever(function () {
	
})
