const router = require('express').Router()
	, { token, base_url } = require('../global')
	, request = require('request-promise')
		.defaults({
			"headers": {
				"Authorization": `Bearer ${token}`
			}
		});

const url = base_url 
router.get('/', (req, res, next) => {
	request(`${url}/cards`)
		.then(clan => res.send(clan))
		.catch(next);
});
module.exports = router;