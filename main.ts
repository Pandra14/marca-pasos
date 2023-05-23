input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showNumber(steps * 0.64)
})
let steps = 0
steps = 0
basic.showNumber(0)
basic.forever(function () {
    if (input.acceleration(Dimension.X) > 1500) {
        steps += 1
        basic.pause(100)
    }
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(steps)
    }
    if (input.buttonIsPressed(Button.B)) {
        steps = 0
        basic.showNumber(0)
    }
})
