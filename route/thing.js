'use strict';

var _ = require('underscore');

module.exports = defineRoute;

// Define the route
function defineRoute (server, opts) {

    server.route({
        method: 'GET',
        path: '/' + opts.plural + '/{id}',
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
        var foundThing = _.filter(opts.things, function (thing) {
            return (thing.id === req.params.id || thing.id === parseInt(req.params.id, 10));
        })[0];
        if (!foundThing) {
            return req.reply({
                code: 404,
                error: 'Not Found'
            }).code(404);
        }
        var res = {};
        res[opts.singular] = foundThing;
        req.reply(res);
    }

}
