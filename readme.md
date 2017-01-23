# fn-call-streak

**Make sure a function gets called regularly.**

[![npm version](https://img.shields.io/npm/v/fn-call-streak.svg)](https://www.npmjs.com/package/fn-call-streak)
[![build status](https://img.shields.io/travis/derhuerst/fn-call-streak.svg)](https://travis-ci.org/derhuerst/fn-call-streak)
[![dependency status](https://img.shields.io/david/derhuerst/fn-call-streak.svg)](https://david-dm.org/derhuerst/fn-call-streak)
[![dev dependency status](https://img.shields.io/david/dev/derhuerst/fn-call-streak.svg)](https://david-dm.org/derhuerst/fn-call-streak#info=devDependencies)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/fn-call-streak.svg)
[![chat on gitter](https://badges.gitter.im/derhuerst.svg)](https://gitter.im/derhuerst)


## Installing

```shell
npm install fn-call-streak
```


## Usage

Let's assume you want to detect a series of calls to `f`, in which **each call must happen within 10ms**.

```js
const streak = require('fn-call-streak')
const check = streak(10) // threshold of 10ms

const f = () => {
	const isFirst = check()
	if (isFirst) console.log('first call in streak!')
}
```

You can pass an optional **total duration of the series as a second parameter**.

Look at [the tests](test.js) to find more examples.


## Contributing

If you **have a question**, **found a bug** or want to **propose a feature**, have a look at [the issues page](https://github.com/derhuerst/location/issues).
