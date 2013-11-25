'use strict';

var _ = require('underscore');

module.exports = defineRoute;

// Define the route
function defineRoute (server, opts) {

    server.route({
        method: 'GET',
        path: '/random',
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
        res[opts.singular] = _.sample(opts.things, 1)[0];
        req.reply(res);
    }

}
