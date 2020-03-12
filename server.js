const express = require('express');

// Initial server
const app = express();
var cors = require('cors')
// serve static files...
app.use(express.static('public'));
app.use(cors())
// Routers
app.use('/player', require('./Routes/player'));
app.use('/clan', require('./Routes/clan'));
app.use('/top', require('./Routes/top'));
app.use('/card', require('./Routes/card'));
app.use('/tournament', require('./Routes/tournament'));

// error handling
app.use((err, req, res, next) => res.status(err.statusCode).send(err))

const port = process.env.PORT || 8000;
app.listen(port, err => console.log(err ? err : `Running on ${port}...`));