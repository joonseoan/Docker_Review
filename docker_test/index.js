const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello Docker!');
});

app.listen(4500, () => {
    console.log('Listen...at 4500');
})