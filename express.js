const express = require(`express`);
const app = express();

app.use(`/static`, express.static(__dirname + `/index.html`))
app.get(`/`, (req,res) => {
    console.log(`requesting`)
    res.sendFile(__dirname + '/index.html');
})

app.listen(process.env.PORT || 8080, () => {
    console.log(`port listening`)
})