function Which_Dice () {
    if (Dice == 0) {
        basic.showString("Coin")
        Sides = 2
    } else if (Dice == 1) {
        basic.showString("D4")
        Sides = 4
    } else if (Dice == 2) {
        basic.showString("D6")
        Sides = 6
    } else if (Dice == 3) {
        basic.showString("D8")
        Sides = 8
    } else if (Dice == 4) {
        basic.showString("D10")
        Sides = 10
    } else if (Dice == 5) {
        basic.showString("D12")
        Sides = 12
    } else if (Dice == 6) {
        basic.showString("D20")
        Sides = 20
    } else {
        basic.showString("D100")
        Sides = 100
    }
}
input.onButtonPressed(Button.A, function () {
    Dice = Dice - 1
    if (Dice < 0) {
        Dice = 7
    }
    Which_Dice()
})
input.onButtonPressed(Button.B, function () {
    Dice = Dice + 1
    if (Dice > 7) {
        Dice = 0
    }
    Which_Dice()
})
input.onGesture(Gesture.Shake, function () {
    Roll = randint(1, Sides)
    if (Dice == 6) {
        if (Roll == 20) {
            music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.OnceInBackground)
        } else if (Roll == 1) {
            music.startMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.OnceInBackground)
        } else {
            music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.OnceInBackground)
        }
    } else {
        music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.OnceInBackground)
    }
})
let Sides = 0
let Roll = 0
let Dice = 0
led.setBrightness(127)
Dice = 0
Roll = 1
Which_Dice()
basic.forever(function () {
    if (Dice == 0) {
        if (Roll == 1) {
            basic.showString("Heads")
        } else {
            basic.showString("Tails")
        }
    } else {
        basic.showNumber(Roll)
    }
})
