const router = require('express').Router()
	, { token, base_url } = require('../global')
	, request = require('request-promise')
		.defaults({
			"headers": {
				"Authorization": `Bearer ${token}`
			}
		});

const url = base_url 

router.get('/clans/:loc_key', (req, res, next) => {
	request(`${url}/locations/${req.params.loc_key}/rankings/clans`)
		.then(clans => res.send(clans))
		.catch(next);
})

router.get('/players/:loc_key', (req, res, next) => {
	request(`${url}/locations/${req.params.loc_key}/rankings/players`)
		.then(players => res.send(players))
		.catch(next);
})

router.get('/war/:loc_key', (req, res, next) => {
	request(`${url}/locations/${req.params.loc_key}/rankings/clanwars`)
		.then(wars => res.send(wars))
		.catch(next);
})

module.exports = router;