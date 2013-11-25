'use strict';

var thingme = require('../..');

// Create the webservice with a config object
var ws = thingme({
    singular: 'kitten',
    plural: 'kittens',
    things: [
        {
            id: 1,
            title: 'Kitten And Lizard',
            url: 'http://25.media.tumblr.com/e747e2e277ac5120f468602b24d02a65/tumblr_mwt21w1Kak1qdlh1io1_400.gif'
        },
        {
            id: 2,
            title: 'Kitten Hanging On Bed',
            url: 'http://31.media.tumblr.com/2a576d6a746d89869c89364548e51218/tumblr_mws46gJSg31t0ddx9o1_500.gif'
        },
        {
            id: 3,
            title: 'Christmas Kitten',
            url: 'http://31.media.tumblr.com/f12b82f8eb8bfc59d8d666e32f81ab6d/tumblr_mwtaqvEDzU1stmjkwo1_500.jpg'
        },
        {
            id: 4,
            title: 'Kitten In A Tree',
            url: 'http://25.media.tumblr.com/59eb07125a4de2848d1afa840551789a/tumblr_mwsnbhhZfQ1r2rj8po1_500.jpg'
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