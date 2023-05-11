const express = require('express')
const pokemon = require('./models/pokemon.js')
const app = express()
const port = 3000


app.get(('/'),(req, res) => {
    res.send("Welcome to Pokemon App!")
})

app.get(('/pokemon'), (req,res) => {
    res.send(pokemon)
})




app.listen(port,()=> {
    console.log(`listening on port ${port}`)
})