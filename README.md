sumobot
=======

Example programs to operate a [sumobot](http://sumobotkit.com/) using [Johnny Five](https://github.com/rwaldron/johnny-five) and [Cylon.js](http://cylonjs.com/).  There are several example programs in this project:

|Program Name | Description|
--------------------------
|cylonjs-demo.js| Simple program that demonstrates the Cylon.js API. Makes robot go in a circle.|
|johnnyfive-turnaround.js | Simple program that demonstrates the Johnny Five API to make a robot go forward, turnaround and come back.|
|keypress-nodebot.js | Uses arrow keys to move sumobot forward, backware, left and right; spacebar to stop and "Q" to quit.|
|server.js | REST webservice API to deploy to runQ NONPROD to issue commands via /operate/[up|down|right|left|stop|quit].|

Installation
============

Taken in part from [here](https://www.spark.io/jsconf):

The first step is to setup your Core with the Spark CLI. Just plug your Core into your computer with a USB cable. Then run

`npm install -g spark-cli`

followed by

`spark setup`

If you've already got the Spark CLI installed, be sure to run `npm update -g spark-cli` since we made updates this week just for you!

DO NOT setup your Core with the Spark mobile app. Chaos will ensue. Trust us.

Once your Core is set up, install the VoodooSpark firmware.

`spark flash YOUR_CORE_NAME voodoo`

After magenta lights flash for a minute during the update, the Core will be back online breathing cyan. To check if the firmware installed successfully, ask for its IP address:

`spark get YOUR_CORE_NAME endpoint`

Now your Spark Core is a nodebot! You can control your Core directly in Node.js by using the `spark-io` npm module:

`npm install spark-io`

For instructions, check out the spark-io README, or get started with spark-io examples. Otherwise, check out the various resources below for all the best things to do with your Spark Core!

Note that you must also export the following variables to use this sample program:

```
$ export SPARK_TOKEN="[obtain from output during spark setup]"
$ export SPARK_DEVICE_ID="[the name you chose to name your core]"
```

To reset your device id to run on another WiFi network you just need to run `spark setup wifi`. This is nice so you don't have to generate another device_id everytime.

Deploy
======

You can deploy this project to runQ by using the checked in stackato.yml but just be sure to use a different URL if you want to test on your own.

`stackato push -n`