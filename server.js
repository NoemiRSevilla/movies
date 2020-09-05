const express = require('express'),
    app = express(),
    port = 8000,
    path = require('path'),
    server = app.listen(port, console.log(`Listening on port ${port}`))

app.use(express.static(__dirname + '/public/dist/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./server/config/database.js');
require('./server/config/routes.js')(app);

app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});