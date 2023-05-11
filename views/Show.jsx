const React = require('react')
class Show extends React.Component {
  render () {
      const poke = this.props.pokemon
      console.log(poke)
    return (
      <div>
        <h1> Poke-Show Page </h1>
            The {poke.name} looks like {poke.img}
            <a href= '/pokemon/'>go back</a>
      </div>
      );
     }
   }
  module.exports  = Show;