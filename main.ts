radio.onReceivedString(function (receivedString) {
    if (receivedString == "N") {
        RingbitCar.forward()
    } else if (receivedString == "S") {
        RingbitCar.back()
    } else if (receivedString == "W") {
        RingbitCar.steering_angle(RingbitCar.Direction_turn.left, 10)
    } else if (receivedString == "E") {
        RingbitCar.steering_angle(RingbitCar.Direction_turn.right, 10)
    } else {
        RingbitCar.brake()
    }
})
radio.setGroup(1)
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
basic.forever(function () {
	
})
