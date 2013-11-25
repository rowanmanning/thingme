'use strict';

var _ = require('underscore');
var Hapi = require('hapi');

module.exports = defineRoute;

// Define the route
function defineRoute (server, opts) {

    server.route({
        method: 'GET',
        path: '/count',
        handler: handler,
        config: {
            jsonp: 'callback',
            validate: {
                query: {},
                payload: false
            }
        }
    });

    function handler (req) {
        var res = {};
        res[opts.singular + '_count'] = opts.things.length;
        req.reply(res);
    }

}
