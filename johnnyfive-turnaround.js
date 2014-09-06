var five = require("johnny-five");
var Spark = require("spark-io");
var keypress = require('keypress');


keypress(process.stdin);

var board = new five.Board({
    io: new Spark({
        token: process.env.SPARK_TOKEN,
        deviceId: process.env.SPARK_DEVICE_ID
    })
});


board.on("ready", function () {

    console.log("Welcome to Sumobot Jr, powered wirelessly with the Spark Core!")

    var left_wheel = new five.Servo({ pin: "D0", type: 'continuous' }).stop();
    var right_wheel = new five.Servo({ pin: "D1", type: 'continuous' }).stop();

    var cw = true,
        numTimes = 0;
    this.loop(1100, function () {
        numTimes++;
        if (numTimes >= 4) {
            console.log("Stopping nodebot...");
            left_wheel.stop();
            right_wheel.stop();
            process.exit();
        } else if (cw) {
            console.log("Moving nodebot forward...");
            left_wheel.cw(0.5);
            right_wheel.ccw(0.5);
            cw = false;
        } else {
            console.log("Turn nodebot around...");
            left_wheel.ccw(0.9);
            right_wheel.ccw(0.9);
            cw = true;
        }
    });
});
