input.onButtonPressed(Button.A, function () {
    basic.showString("good day")
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.StickFigure)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Giraffe)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("updated 05:02 26.12.21")
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        # . . . .
        # . . # #
        # # # # .
        # # # # .
        # . . # .
        `)
})
basic.showString("Hi David")
basic.showIcon(IconNames.Happy)
