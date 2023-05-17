//requirements
const express = require('express')
const Pokemon = require('./models/pokemon.js')
require('dotenv').config()
const mongoose = require('mongoose')

//variables
const app = express()
const port = 3000

const db = mongoose.connection;
const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

//middleware
//Connection Error/Success
db.on("error", (err) => console.log(err.message + " is mongodb not running"));

db.on("open", () => console.log("mongo connected "));

db.on("close", () => console.log("mongo disconnected"));


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

app.get("/pokemon", async(req, res) => {
    try {
        const allPokemon = await Pokemon.find({})
        res.render("Index", { pokemon: allPokemon })

    }
    catch (error) {
        console.log(error.message)
    }
});
  

app.get("/pokemon/new", (req, res) => {
    res.render("New");
});
  
app.post("/pokemon", async (req, res) => {
    try {
        const { name, img } = req.body;
        const newPokemon = new Pokemon({ name, img });
  
        newPokemon.save(res.redirect("/pokemon"));
    }
    catch (error){
        console.log(error)
    }
});


  
app.post("/pokemon", async(req, res) => {
    try {
        await Pokemon.create(req.body, res.redirect("/pokemon"))
    }
    catch (error) {
        console.log(error.message)
    }
})


app.get(('/pokemon/:id'), async (req, res) => {
    try {
        const foundPokemon = await Pokemon.findById(req.params.id)
        res.render("Show", { pokemon: foundPokemon })
    }
    catch (error) {
        console.log(error.message)
    }
})


//listener
app.listen(port,()=> {
    console.log(`listening on port ${port}`)
})