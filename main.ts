input.onButtonPressed(Button.A, function () {
    basic.showNumber(testVar.length)
    basic.showString("" + testVar + postVar)
})
input.onButtonPressed(Button.B, function () {
    serial.writeLine("" + (testVar.length))
    serial.writeLine("" + testVar + postVar)
})
let postVar = ""
let testVar = ""
testVar = "The quick brown Fox jumped over the lazy Dog. Super!"
postVar = "Beware of the Blobfish!"
