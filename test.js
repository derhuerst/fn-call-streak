'use strict'

const lolex = require('lolex')
const test = require('tape')
const streak = require('.')

const clock = lolex.install({now: Date.now()})

test('returns a function "check"', (t) => {
	t.plan(2)
	const f = streak()

	t.equal(typeof f, 'function')
	t.equal(f.name, 'check')
})

test('`true` when outside of threshold', (t) => {
	t.plan(3)
	const f = streak(10)

	t.equal(f(), true)
	clock.tick(9)
	t.equal(f(), false)
	clock.tick(11)
	t.equal(f(), true)
})

test('`true` when outside of total', (t) => {
	t.plan(3)
	const f = streak(7, 10)

	t.equal(f(), true)
	clock.tick(6)
	t.equal(f(), false)
	clock.tick(6)
	t.equal(f(), true)
})
