'use strict'

const streak = require('fn-call-streak')
const check = streak(10, 50) // threshold of 10ms, total of 50ms

const f = () => {
	const isFirst = check()
	if (isFirst) console.log('first call in streak!')
}
