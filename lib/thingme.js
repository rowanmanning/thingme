'use strict';

var _ = require('underscore');
var Hapi = require('hapi');

module.exports = createThingme;

// Create a thingme web-service
function createThingme (opts) {
    opts = defaultOptions(opts);
    validateThings(opts.things);
    return createWebservice(opts);
}

// Create a webservice
function createWebservice (opts) {
    var server = new Hapi.Server(opts.host, opts.port, {
        cors: {
            methods: ['GET']
        }
    });
    defineRoutes(server, opts);
    return {
        address: 'http://' + opts.host + ':' + opts.port + '/',
        start: server.start.bind(server)
    };
}

// Define webservice routes
function defineRoutes (server, opts) {
    require('../route')(server, opts);
    require('../route/things')(server, opts);
    require('../route/thing')(server, opts);
    require('../route/random')(server, opts);
    require('../route/bomb')(server, opts);
}

// Default options
function defaultOptions (opts) {
    return _.defaults({}, opts, {
        host: '0.0.0.0',
        port: process.env.PORT || 3000,
        singular: 'thing',
        plural: 'things',
        things: [],
        defaultBombCount: 5
    });
}

// Validate things
function validateThings (things) {
    if (!Array.isArray(things)) {
        throw new Error('Things must be an array');
    }
    if (things.filter(isValidThing).length !== things.length) {
        throw new Error('Each thing must be an object with an `id` property');
    }
}

// Check whether a thing is valid
function isValidThing (thing) {
    return (_.isObject(thing) && thing.id !== null && thing.id !== undefined);
}
