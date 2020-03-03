const router = require('express').Router()
	, { token, base_url } = require('../global')
	, request = require('request-promise')
		.defaults({
			"headers": {
				"Authorization": `Bearer ${token}`
			}
		});

const url = base_url + '/players'

router.get('/:tag', (req, res, next) => {
	request(`${url}/%23${req.params.tag}`)
		.then(player => res.send(player))
		.catch(next);
})

router.get('/:tag/battles', (req, res, next) => {
	request(`${url}/%23${req.params.tag}/battlelog`)
		.then(battles => res.send(battles))
		.catch(next);
})

router.get('/:tag/chests', (req, res, next) => {
	request(`${url}/%23${req.params.tag}/upcomingchests`)
		.then(chests => res.send(chests))
		.catch(next);
})

module.exports = router;