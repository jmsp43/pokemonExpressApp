const React = require("react");

const styling = {
    color: '#ffffff',
    backgroundColor: '#aaaaaa',
    padding: '15px',
}


class Index extends React.Component {
  render() {
      const { pokemon } = this.props;
    return (
      <div style = {styling}>
        <h1>Poke-Index Page</h1>
        <ul>
                {pokemon.map((poke, i) => {
                    let capName = poke.name.charAt(0).toUpperCase() + poke.name.slice(1)
            return (
              <li>
                <a href={`/pokemon/${i}`}>{capName}</a>
                <br />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
module.exports = Index;
