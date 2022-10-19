input.onButtonPressed(Button.AB, function () {
    xvalue = 0
    while (xvalue <= 5) {
        led.plot(xvalue, 0)
        basic.pause(100)
        basic.clearScreen()
        xvalue += 1
    }
})
let xvalue = 0
xvalue = 0
let yvalue = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.clearScreen()
        led.plot(xvalue, 0)
        basic.pause(100)
        xvalue += 1
    }
    if (xvalue == 5) {
        xvalue = 0
    }
    if (input.buttonIsPressed(Button.B)) {
        basic.clearScreen()
        led.plot(0, yvalue)
        basic.pause(100)
        yvalue += 1
    }
    if (yvalue == 5) {
        yvalue = 0
    }
})
