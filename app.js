const express = require('express');
const app = express();

const port = 8080;
require('./models')

app.get("/", (req, resp) => {
    resp.send("Homepage")
});

app.listen(port, () => {
    console.log(`app is running at http://localhost:${port}`);
})