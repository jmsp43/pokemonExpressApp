const React = require("react");

const styling = {
    color: '#ffffff',
    backgroundColor: '#aaaaaa',
}


class Index extends React.Component {
  render() {
      const { pokemon } = this.props;
      console.log(pokemon)
    return (
      <div style = {styling}>
        <h1>Poke-Index Page</h1>
        <ul>
          {pokemon.map((poke, i) => {
            return (
              <li>
                <a href={`/pokemon/${i}`}>{poke.name}</a>
                <br />
              </li>
            );
          })}
        </ul>
        <nav>
                <a href="/fruits/new">Create a New Pokemon</a>
        </nav>
      </div>
    );
  }
}
module.exports = Index;
