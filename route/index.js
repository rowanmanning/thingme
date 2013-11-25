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
        var host = req.info.host;
        var exampleId = (opts.things[0] ? opts.things[0].id : 1);
        req.reply({
            endpoints: [
                {
                    method: 'GET',
                    endpoint: '/' + opts.plural,
                    description: 'Get all ' + opts.plural,
                    example: 'http://' + host + '/' + opts.plural
                },
                {
                    method: 'GET',
                    endpoint: '/' + opts.plural + '/{id}',
                    description: 'Get a single ' + opts.singular + ' by id',
                    example: 'http://' + host + '/' + opts.plural + '/' + exampleId
                },
                {
                    method: 'GET',
                    endpoint: '/random',
                    description: 'Get a random ' + opts.singular,
                    example: 'http://' + host + '/random'
                },
                {
                    method: 'GET',
                    endpoint: '/bomb?count={n}',
                    description: 'Get multiple random ' + opts.plural,
                    example: 'http://' + host + '/bomb?count=3'
                }
            ]   
        });
    }

}
