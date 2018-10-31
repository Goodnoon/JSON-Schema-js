![Build Status](https://travis-ci.org/0xcert/json-schema-js.svg?branch=master)&nbsp;[![NPM Version](https://badge.fury.io/js/json-schema-js.svg)](https://badge.fury.io/js/json-schema-js)&nbsp;[![Dependency Status](https://gemnasium.com/0xcert/json-schema-js.svg)](https://gemnasium.com/0xcert/json-schema-js)

# [0xcert](https://0xcert.org)/[json-schema](http://json-schema.org)

> JSON Schema modeling and validation

[JSON Schema](http://json-schema.org) is a vocabulary that allows you to annotate and validate JSON documents. This module provides data validation and manipulation by following the latest `draft-07` JSON schema specification.

This is a light weight open source package for the **server** and **browser** (using module bundler) written with [TypeScript](https://www.typescriptlang.org). The source code is available on [GitHub](https://github.com/0xcert/json-schema-js) where you can also find our [issue tracker](https://github.com/0xcert/json-schema-js/issues).

## Installation

Run the command below to install the package.

```
npm install --save @0xcert/json-schema
```

## Getting started

Start by defining a JSON Schema definition.

```js
import { Schema } from '@0xcert/json-schema';

const schema = new Schema({
  properties: {
    'name': {
      type: 'string',
    },
  },
  require: ['name'],
});
```

Create a model and assign data.

```js
import { Model } from '@0xcert/json-schema';

const person = new Model({
  schema,
}, {
  name: 'John Smith',
});
```

Validate and manipulate data.

```js
person.validate();
person.serialize();
```

## License (MIT)

```
Copyright (c) 2017+ 0xcert <admin@0xcert.org>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated modelation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
