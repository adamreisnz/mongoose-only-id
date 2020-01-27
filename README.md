# @meanie/mongoose-only-id

[![npm version](https://img.shields.io/npm/v/@meanie/mongoose-only-id.svg)](https://www.npmjs.com/package/@meanie/mongoose-only-id)
[![node dependencies](https://david-dm.org/meanie/mongoose-only-id.svg)](https://david-dm.org/meanie/mongoose-only-id)
[![github issues](https://img.shields.io/github/issues/meanie/mongoose-only-id.svg)](https://github.com/meanie/mongoose-only-id/issues)
[![codacy](https://img.shields.io/codacy/e178bf57ecbf469e97c1f03d44a8cca9.svg)](https://www.codacy.com/app/meanie/mongoose-only-id)


Simple Mongoose helper to safely strip objects to just an ID

![Meanie](https://raw.githubusercontent.com/meanie/meanie/master/meanie-logo-full.png)

## Installation

You can install this package using `yarn` or `npm`.

```shell
#yarn
yarn add @meanie/mongoose-only-id

#npm
npm install @meanie/mongoose-only-id --save
```

## Usage


```js
const onlyId = require('meanie-mongoose-only-id');

//Objects are stripped to only ID
onlyId({id: '123', name: 'Name'}); //'123'
onlyId({_id: new ObjectId('123'), name: 'Name'}); //'123'

//Also works on arrays
onlyId([
  {id: '123', name: 'Item 1'},
  {_id: new ObjectId('123'), name: 'Name'},
]); //['123', '123']

//Simple values are retained
onlyId('123'); //'123'
onlyId(123); //123
```

## Issues & feature requests

Please report any bugs, issues, suggestions and feature requests in the [@meanie/mongoose-only-id issue tracker](https://github.com/meanie/mongoose-only-id/issues).

## Contributing

Pull requests are welcome! If you would like to contribute to Meanie, please check out the [Meanie contributing guidelines](https://github.com/meanie/meanie/blob/master/CONTRIBUTING.md).

## Sponsor

This package has been kindly sponsored by [Hello Club](https://helloclub.com?source=meanie), an [all in one club and membership management solution](https://helloclub.com?source=meanie) complete with booking system, automated membership renewals, online payments and integrated access and light control. Check us out if you happen to belong to any kind of club or if you know someone who helps run a club!

## License

(MIT License)

Copyright 2016-2020, Adam Reis
