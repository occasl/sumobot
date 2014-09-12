var Cylon = require('cylon');

// Initialize the robot
Cylon.robot({
    connection: {
        name: 'voodoospark',
        adaptor: 'voodoospark',
        accessToken: process.env.SPARK_TOKEN,
        deviceId: process.env.SPARK_DEVICE_ID,
        module: 'spark'
    },
    device: [
        { name: 'leftwheel', driver: 'continuous-servo', pin: 'D0' },
        { name: 'rightwheel', driver: 'continuous-servo', pin: 'D1' }
    ],

    work: function (my) {
        var cw = true;

        // turn right
        my.devices.leftwheel.clockwise();
        my.devices.rightwheel.counterClockwise();

        every((2).second(), function () {
            if (cw) {
                my.devices.leftwheel.counterClockwise();
                my.devices.rightwheel.clockwise();
                cw = false;
            } else {
                my.devices.leftwheel.clockwise();
                my.devices.rightwheel.counterClockwise();
                cw = true;
            }
        });
    }
}).start();