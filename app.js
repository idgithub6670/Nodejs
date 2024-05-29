const express = require('express');
const debug = require('debug')('app');
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello Thana");
});

app.listen(port, () => {
    debug("Listening on port" + " " + port);
});
