//requirements
const express = require('express')
const pokemon = require('./models/pokemon.js')

//variables
const app = express()
const port = 3000

//middleware
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});
app.use(express.urlencoded({extended:false}));
app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());


//INDUCES
//routes
app.get(('/'),(req, res) => {
    res.send("Welcome to Pokemon App!")
})

app.get(('/pokemon'), (req,res) => {
    res.render('Index', { pokemon: pokemon })
})

app.get(('/pokemon/:id'), (req,res) => {
    res.render('Show', {pokemon : pokemon[req.params.id]})
})


//listener
app.listen(port,()=> {
    console.log(`listening on port ${port}`)
})