const router = require('express').Router()
	, { token, base_url } = require('../global')
	, request = require('request-promise')
		.defaults({
			"headers": {
				"Authorization": `Bearer ${token}`
			}
		});

const url = base_url + '/clans'

router.get('/search', (req, res, next) => {
	request(`${url}/clans`, { qs: { ...req.query } })
		.then(clans => res.send(clans))
		.catch(next)
});

router.get('/:tag', (req, res, next) => {
	request(`${url}/%23${req.params.tag}`)
		.then(clan => res.send(clan))
		.catch(next);
});



router.get('/:tag/war', (req, res, next) => {
	request(`${url}/%23${req.params.tag}/currentwar`)
		.then(clan => res.send(clan))
		.catch(next);
});

router.get('/:tag/warlog', (req, res, next) => {
	request(`${url}/%23${req.params.tag}/warlog`)
		.then(clan => res.send(clan))
		.catch(next);
});

module.exports = router;