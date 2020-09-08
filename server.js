const express = require('express');
const path = require('path');

const app = express();


app.use(express.static(path.join(__dirname, 'build')));

app.listen(8888, () => {
    console.info(`server started at localhost:${8888} ` + new Date().toLocaleString());
})