(function () {
    "use strict";

    var restify = require('restify'),
        bunyan = require('bunyan'),
        api = require('./controller/api.js');

    // Get the environment variables we need.
    var host = process.env.VCAP_APP_HOST || 'localhost';
    var port = process.env.VCAP_APP_PORT || 3000;

    var logger = bunyan.createLogger({
        name: 'Mobile Sumobot',
        streams: [
            {
                level: process.env.LOG_LEVEL || 'info',
                stream: process.stdout
            },
            {
                level: 'error',
                stream: process.stderr
            }
        ]
    });

    var server = restify.createServer({
        name: 'Mobile Sumobot',
        version: '0.0.1',
        log: logger
    });


    logger.info("Starting up " + server.name + " " + server.version);

    // Cleans up sloppy paths
    server.pre(restify.pre.sanitizePath());
    server.use(restify.acceptParser(server.acceptable));
    server.use(restify.queryParser());

    // Service API
    server.get('/operate/:cmd', api.command);


    server.listen(port, host, function () {
        console.log('%s listening at %s', server.name, server.url);
    });
})();