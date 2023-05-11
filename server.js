const express = require('express')
const pokemon = require('./models/pokemon.js')
const app = express()
const port = 3000


app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});
app.use(express.urlencoded({extended:false}));


app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());


app.get(('/'),(req, res) => {
    res.send("Welcome to Pokemon App!")
})

app.get(('/pokemon'), (req,res) => {
    res.render('Index', { pokemon: pokemon })
})




app.listen(port,()=> {
    console.log(`listening on port ${port}`)
})