const router = require('express').Router()
	, { token, base_url } = require('../global')
	, request = require('request-promise')
		.defaults({
			"headers": {
				"Authorization": `Bearer ${token}`
			}
		});

const url = base_url
router.get('/:tag', (req, res, next) => {
	request(`${url}/tournaments/%23${req.params.tag}`)
		.then(clan => res.send(clan))
		.catch(next);
});
router.get('/', (req, res, next) => {
	request(`${url}/globaltournaments`)
		.then(clan => res.send(clan))
		.catch(next);
});
module.exports = router;
