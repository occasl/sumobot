(function () {
    "use strict";
    var five = require("johnny-five");
    var Spark = require("spark-io");

    var board = new five.Board({
        io: new Spark({
            token: process.env.SPARK_TOKEN,
            deviceId: process.env.SPARK_DEVICE_ID
        })
    });

    var left_wheel = {}, right_wheel = {};
    board.on("ready", function () {
        left_wheel = new five.Servo({ pin: "D0", type: 'continuous' }).stop();
        right_wheel = new five.Servo({ pin: "D1", type: 'continuous' }).stop();
    });

    exports.command = function (req, res, next) {
        switch (req.params.cmd) {
            case 'up':
                console.log('Backward');
                left_wheel.cw(0.9);
                right_wheel.ccw(0.9);
                break;
            case 'down':
                console.log('Forward');
                left_wheel.ccw(0.9);
                right_wheel.cw(0.9);
                break;
            case 'left':
                console.log('Left');
                left_wheel.ccw(0.9);
                right_wheel.ccw(0.9);
                break;
            case 'right':
                console.log('Right');
                left_wheel.cw(0.9);
                right_wheel.cw(0.9);
                break;
            case 'stop':
                console.log('Stopping');
                left_wheel.stop();
                right_wheel.stop();
                break;
            case 'quit':
                console.log('Quitting');
                process.exit();
                break;
            default :
                break;
        }
        return next("{success: true}");
    };
})();


