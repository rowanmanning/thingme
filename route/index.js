'use strict';

module.exports = defineRoute;

// Define the route
function defineRoute (server, opts) {

    server.route({
        method: 'GET',
        path: '/',
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
        req.reply({
            endpoints: [
                {
                    method: 'GET',
                    endpoint: '/' + opts.plural,
                    description: 'Get all ' + opts.plural
                },
                {
                    method: 'GET',
                    endpoint: '/' + opts.plural + '/{id}',
                    description: 'Get a single ' + opts.singular + ' by id'
                },
                {
                    method: 'GET',
                    endpoint: '/random',
                    description: 'Get a random ' + opts.singular
                },
                {
                    method: 'GET',
                    endpoint: '/bomb?count={n}',
                    description: 'Get multiple random ' + opts.plural
                }
            ]   
        });
    }

}
