var express = require('express')
var joke = require('./router/joke')
var {JokeRepository} = require('./repository/joke')

var app = express()
const port = 3000

app.use("/joke", joke);

async function mainData() {
   let data = await JokeRepository.callInitialFetch();
   return data;
}


app.listen(port, () => {
    mainData().then(console.info).catch(console.error);
    console.log(`Example app listening at http://localhost:${port}`)
})