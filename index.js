'use strict'

const streak = (threshold = 1000, total = 0) => {
	let firstT = 0, lastT = 0, streak = false

	const check = () => {
		const now = Date.now()

		const withinThreshold = (now - lastT) <= threshold
		const withinTotal = total > 0 ? (now - firstT) <= total : true
		const first = !(withinThreshold && withinTotal)

		if (!streak || first) {
			streak = true
			firstT = now
			lastT = now
			return true
		} else return false
	}
	return check
}

module.exports = streak
