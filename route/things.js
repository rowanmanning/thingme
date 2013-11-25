'use strict';

module.exports = defineRoute;

// Define the route
function defineRoute (server, opts) {

    server.route({
        method: 'GET',
        path: '/' + opts.plural,
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
        res[opts.plural] = opts.things;
        req.reply(res);
    }

}
