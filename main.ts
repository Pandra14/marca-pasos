let steps = 0
basic.showNumber(0)
basic.forever(function () {
    if (input.acceleration(Dimension.Strength) > 2350) {
        steps += 1
    }
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(steps)
    }
    if (input.buttonIsPressed(Button.B)) {
        steps = 0
        basic.showNumber(0)
    }
})
