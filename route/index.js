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
                    endpoint: '/random',
                    description: 'Get a random ' + opts.singular,
                    example: 'http://' + host + '/random'
                },
                {
                    method: 'GET',
                    endpoint: '/bomb?count={n}',
                    description: 'Get multiple random ' + opts.plural,
                    example: 'http://' + host + '/bomb?count=3'
                },
                {
                    method: 'GET',
                    endpoint: '/count',
                    description: 'Get the number of available ' + opts.plural,
                    example: 'http://' + host + '/count'
                }
            ]   
        });
    }

}
