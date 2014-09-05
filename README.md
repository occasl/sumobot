sumobot
=======

Example Node program to run a simple keypress based nodebot.  Use arrow keys to move sumobot, spacebar to stop and "Q" to quit.

Installation
============

Taken from [here](https://www.spark.io/jsconf):

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

To reset your device id to run on other WiFi network you just need to run `spark setup wifi`.