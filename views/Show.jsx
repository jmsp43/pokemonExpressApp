const React = require('react')
class Show extends React.Component {
  render () {
      const poke = this.props.pokemon
      let image = poke.img + '.jpg'
      let capName = poke.name.charAt(0).toUpperCase() + poke.name.slice(1)
    return (
      <div>
            <h1> Poke-Show Page </h1>
            {capName} looks like this!
            <br />
            <br />
            <img src={image}/>
            <br />
            <br />
            <a href= '/pokemon/'>Go back</a>
      </div>
      );
     }
   }
  module.exports  = Show;