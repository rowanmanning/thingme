
Thingme
=======

Build web-services for finding and randomizing things, similar to [pugme][pugme]. Thingme generates endpoints for you, and serves static data in an easy-to-consume JSON API.

**Current Version:** *0.0.0*  
**Node Support:** *0.10*


Installing
----------

Thingme requires [Node.js][node] 0.10+ to run, and you can install the command-line tool globally with:

```sh
$ npm install -g thingme
```

If you're using Thingme in your own project, add it to your `package.json`.


Web-Service
-----------

Webservices created with Thingme have the following endpoints. In these endpoints, `things` will be replaced by a word of your choice.

#### GET /
Get an array of available endpoints, and some light documentation.

#### GET /things
Get all the things as an array.

```json
{
    "things": [
        {
            "id": 1,
            "value": "foo"
        }
    ]
}
```

#### GET /things/{id}
Get a single thing by id.

```json
{
    "thing": {
        "id": 1,
        "value": "foo"
    }
}
```

#### GET /random
Get a random thing.

```json
{
    "thing": {
        "id": 1,
        "value": "foo"
    }
}
```

#### GET /bomb?count={n}
Get {n} random things as an array.

```json
{
    "things": [
        {
            "id": 1,
            "value": "foo"
        }
    ]
}
```

#### GET /count
Get the number of available things.

```json
{
    "thing_count": 20
}
```

Each endpoint supports cross-origin resource sharing, as well as JSONp (with the callback parameter being `callback`).


Usage (Command-Line)
--------------------

The simplest way to use Thingme is with the command-line tool. Assuming you've installed the module globally, you'll be able to run the following:

```sh
$ thingme path/to/config.json
```

This will start the web-service (on port 3000 by default). For information on how to write your config files, see the [configuration documentation](#configuration). There is an example application built this way in [`example/json`](example/json).


Usage (JavaScript)
------------------

You can also use Thingme from within a node.js script by requiring the module:

```js
var thingme = require('thingme');
```

The `thingme` function accepts a [configuration object](#configuration) and returns a web-service object:

```js
var ws = thingme({
    singular: 'kitten',
    plural: 'kittens',
    things: [ ... ]
});
```

The web-service object has a single method named `start`, which accepts a callback:

```js
ws.start(function (err) {
    // err will be null on success, or an error object if the web-service cannot start 
});
```

There is an example application built this way in [`example/javascript`](example/javascript).


Configuration
-------------

The config object (either in a JSON file, or passed in as a JavaScript object) can have the following properties:

#### host
*(string)* The host to bind the web-service to. It's best to leave this unless you intend on binding multiple applications to the same port. Default: `0.0.0.0`.

#### port
*(number)* The port to bind the web-service to. Default: `process.env.PORT` or `3000`.

#### singular
*(string)* The singular name for the things exposed by your web-service. E.g. "kitten". Default: `thing`.

#### plural
*(string)* The plural name for the things exposed by your web-service. E.g. "kittens". Default: `things`.

#### things
*(array[object])* An array of objects which will be the data exposed by the web-service. Each object should ideally have at least an `id` property. Default: `[]`.

#### things defaultBombCount
*(number)* The default number of things to return for the `/bomb` endpoint, when no `count` parameter is sent. Default: 5.


Development
-----------

To develop Thingme, you'll need to clone the repo and install dependencies with `npm install`. You'll also need [Grunt][grunt] to be installed globally in order to run tests, you can do this with `npm install -g grunt-cli`.

Once you're set up, the following commands are available:

```sh
$ grunt lint  # Run JSHint with the correct config
```

Code with lint errors will not be accepted, please use the build tools outlined above.


License
-------

Thingme is licensed under the [MIT][mit] license.



[grunt]: http://gruntjs.com/
[mit]: http://opensource.org/licenses/mit-license.php
[node]: http://nodejs.org/
[pugme]: http://pugme.herokuapp.com/
