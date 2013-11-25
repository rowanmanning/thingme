'use strict';

var _ = require('underscore');
var Hapi = require('hapi');

module.exports = defineRoute;

// Define the route
function defineRoute (server, opts) {

    server.route({
        method: 'GET',
        path: '/bomb',
        handler: handler,
        config: {
            jsonp: 'callback',
            validate: {
                query: {
                    count: Hapi.types.Number()
                },
                payload: false
            }
        }
    });

    function handler (req) {
        var count = (req.query.count || opts.defaultBombCount);
        var res = {};
        res[opts.plural] = _.sample(opts.things, count);
        req.reply(res);
    }

}
