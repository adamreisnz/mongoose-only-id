# @reis/mongoose-only-id

[![npm version](https://img.shields.io/npm/v/@reis/mongoose-only-id.svg)](https://www.npmjs.com/package/@reis/mongoose-only-id)
[![github issues](https://img.shields.io/github/issues/adamreisnz/mongoose-only-id.svg)](https://github.com/adamreisnz/mongoose-only-id/issues)

Simple Mongoose helper to safely strip objects to just an ID

## Installation

You can install this package using `yarn` or `npm`.

```shell
#yarn
yarn add @reis/mongoose-only-id

#npm
npm install @reis/mongoose-only-id --save
```

## Usage

```js
import {onlyId} from '@reis/mongoose-only-id'

//Objects are stripped to only ID
onlyId({id: '123', name: 'Name'}) //'123'
onlyId({_id: new ObjectId('123'), name: 'Name'}) //'123'

//Also works on arrays
onlyId([
  {id: '123', name: 'Item 1'},
  {_id: new ObjectId('123'), name: 'Name'},
]) //['123', '123']

//Simple values are retained
onlyId('123') //'123'
onlyId(123) //123
```

## Issues & feature requests

Please report any bugs, issues, suggestions and feature requests in the [mongoose-only-id issue tracker](https://github.com/adamreisnz/mongoose-only-id/issues).

## License

(MIT License)

Copyright 2016-2023, Adam Reis
