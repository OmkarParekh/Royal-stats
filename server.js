const express = require('express');

// Initial server
const app = express();

// serve static files...
app.use(express.static('public'));

// Routers
app.use('/player', require('./Routes/player'));
app.use('/clan', require('./Routes/clan'));
app.use('/top', require('./Routes/top'));

// error handling
app.use((err, req, res, next) => res.status(err.statusCode).send(err))

const port = process.env.PORT || 8000;
app.listen(port, err => console.log(err ? err : `Running on ${port}...`));