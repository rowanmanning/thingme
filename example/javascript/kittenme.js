'use strict';

var thingme = require('../..');

// Create the webservice with a config object
var ws = thingme({
    singular: 'kitten',
    plural: 'kittens',
    things: [
        {
            title: 'Kitten And Lizard',
            url: 'http://goo.gl/lB7mJE'
        },
        {
            title: 'Kitten Hanging On Bed',
            url: 'http://goo.gl/B4mhVl'
        },
        {
            title: 'Christmas Kitten',
            url: 'http://goo.gl/zm70m7'
        },
        {
            title: 'Kitten In A Tree',
            url: 'http://goo.gl/aOxOcB'
        }
    ]
});

// Start the webservice
ws.start(function (err) {
    if (err) {
        console.error('Webservice failed to start: ' + err.message);
        process.exit(1);
    }
    console.log('Webservice started: ' + ws.address);
});
